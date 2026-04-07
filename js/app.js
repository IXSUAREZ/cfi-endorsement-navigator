"use strict";

(() => {
  const APP_META = window.APP_META || {};
  const ENDORSEMENTS = Array.isArray(window.ENDORSEMENTS) ? window.ENDORSEMENTS.slice() : [];
  const BROWSE_STRUCTURE = Array.isArray(window.BROWSE_STRUCTURE)
    ? window.BROWSE_STRUCTURE.slice()
    : [];

  const CATEGORY_DEFS = [
    {
      id: "all",
      label: "All Endorsements",
      description: "Search the full AC 61-65K endorsement library or open a category for a narrower view.",
    },
    {
      id: "practical-test-prereqs",
      label: "Practical Test Prerequisites",
      description: "Eligibility and deficiency-review endorsements used around practical tests.",
    },
    {
      id: "student-pilot",
      label: "Student Pilot",
      description: "Pre-solo, solo renewal, solo XC, and student-only endorsements.",
    },
    {
      id: "sport-pilot",
      label: "Sport Pilot",
      description: "Sport pilot knowledge, practical test, and aircraft or operations endorsements.",
    },
    {
      id: "recreational-pilot",
      label: "Recreational Pilot",
      description: "Recreational pilot operating limitations, practical test, and solo endorsements.",
    },
    {
      id: "private-pilot",
      label: "Private Pilot",
      description: "Private pilot knowledge and practical-test endorsements plus common checkride bundles.",
    },
    {
      id: "commercial-pilot",
      label: "Commercial Pilot",
      description: "Commercial pilot knowledge and practical-test endorsements plus common checkride bundles.",
    },
    {
      id: "atp",
      label: "ATP",
      description: "ATP Certification Training Program and restricted ATP endorsements.",
    },
    {
      id: "instrument-rating",
      label: "Instrument Rating",
      description: "Instrument knowledge and practical-test endorsements.",
    },
    {
      id: "flight-instructor",
      label: "Flight Instructor",
      description: "FOI, FIA, CFI, CFII, and related instructor endorsements.",
    },
    {
      id: "sport-pilot-instructor",
      label: "Sport Pilot Instructor",
      description: "Knowledge, practical test, and training endorsements for sport pilot instructors.",
    },
    {
      id: "additional-recurrent",
      label: "Additional / Recurrent",
      description: "Flight review, IPC, aircraft endorsements, retests, add-ons, and other recurrent items.",
    },
    {
      id: "robinson-sfar73",
      label: "Robinson SFAR 73",
      description: "R22 and R44 SFAR 73 training, awareness, and proficiency endorsements.",
    },
    {
      id: "specialty-operations",
      label: "Specialty Operations",
      description: "NVG, EFVS, and simplified flight controls endorsements.",
    },
  ];

  const CATEGORY_MAP = new Map(CATEGORY_DEFS.map((item) => [item.id, item]));
  const BROWSE_MAP = new Map(BROWSE_STRUCTURE.map((item) => [item.categoryId, item]));
  const ENDORSEMENT_MAP = new Map(ENDORSEMENTS.map((item) => [item.id, item]));

  const ISSUER_LABELS = {
    "standard-cfi": "Standard CFI signoff",
    "examiner-only": "Examiner only",
    "dpe-or-asi-only": "DPE or ASI only",
    "approved-institution": "Approved institution",
    "non-instructor": "Qualified non-instructor",
  };

  const SIGNATURE_DISPLAY = {
    "standard-cfi": "/s/ [date] J. J. Jones 987654321CFI RE 12-31-2026",
    "examiner-only": "Issued by examiner at the practical test.",
    "dpe-or-asi-only": "Issued by a DPE or FAA ASI only.",
    "approved-institution": "Issued by an authorized academic institution only.",
    "non-instructor": "May be issued by a qualified non-instructor when the rule allows it.",
  };

  const EXPIRATION_LABELS = {
    "90-calendar-days": "90 days",
    "2-calendar-months": "2 months",
    none: "",
  };

  const state = {
    query: "",
    category: "all",
    subcategory: null,
    includeSupplemental: false,
    expandedId: null,
    openCategory: null,
    sidebarOpen: false,
  };

  const dom = {
    searchInput: document.getElementById("searchInput"),
    categoryNav: document.getElementById("categoryNav"),
    endorsementList: document.getElementById("endorsementList"),
    resultsSummary: document.getElementById("resultsSummary"),
    selectionEyebrow: document.getElementById("selectionEyebrow"),
    selectionTitle: document.getElementById("selectionTitle"),
    selectionDescription: document.getElementById("selectionDescription"),
    bundleBar: document.getElementById("bundleBar"),
    acVersionText: document.getElementById("acVersionText"),
    footerMeta: document.getElementById("footerMeta"),
    filterRail: document.getElementById("filterRail"),
    sidebarToggleBtn: document.getElementById("sidebarToggleBtn"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function debounce(fn, delay) {
    let timeoutId = null;
    return function debounced() {
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn.apply(null, args), delay);
    };
  }

  function buildSearchIndex(item) {
    return normalizeText(
      [
        item.id,
        item.title,
        item.explanation,
        item.verbatimText,
        item.acRef,
        Array.isArray(item.cfr) ? item.cfr.join(" ") : "",
        Array.isArray(item.aliases) ? item.aliases.join(" ") : "",
        Array.isArray(item.tags) ? item.tags.join(" ") : "",
      ].join(" "),
    );
  }

  function getCategoryCounts() {
    const counts = { all: ENDORSEMENTS.length };
    ENDORSEMENTS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }

  function getCategoryMatchMap() {
    const query = normalizeText(state.query);
    const matches = {};
    if (!query) {
      return matches;
    }

    ENDORSEMENTS.forEach((item) => {
      if (!item._searchIndex) {
        item._searchIndex = buildSearchIndex(item);
      }
      if (item._searchIndex.indexOf(query) !== -1) {
        matches[item.category] = true;
      }
    });

    return matches;
  }

  function getCategoryEntry(categoryId) {
    return BROWSE_MAP.get(categoryId) || null;
  }

  function getSelectedSubcategory() {
    if (!state.subcategory || state.category === "all") {
      return null;
    }
    const entry = getCategoryEntry(state.category);
    if (!entry) {
      return null;
    }
    return entry.subcategories.find((item) => item.id === state.subcategory) || null;
  }

  function getBundleIds(subcategory) {
    if (!subcategory) {
      return null;
    }

    const ids = subcategory.primaryIds.slice();
    if (state.includeSupplemental && Array.isArray(subcategory.supplementalIds)) {
      subcategory.supplementalIds.forEach((id) => {
        if (!ids.includes(id)) {
          ids.push(id);
        }
      });
    }
    return ids;
  }

  function getScopedEndorsements() {
    const selectedSubcategory = getSelectedSubcategory();
    if (selectedSubcategory) {
      return getBundleIds(selectedSubcategory)
        .map((id) => ENDORSEMENT_MAP.get(id))
        .filter(Boolean);
    }

    const scoped = ENDORSEMENTS
      .filter((item) => state.category === "all" || item.category === state.category)
      .sort((left, right) => left.order - right.order);

    return scoped;
  }

  function getVisibleEndorsements() {
    const query = normalizeText(state.query);
    return getScopedEndorsements().filter((item) => {
      if (!query) {
        return true;
      }
      if (!item._searchIndex) {
        item._searchIndex = buildSearchIndex(item);
      }
      return item._searchIndex.indexOf(query) !== -1;
    });
  }

  function validateData() {
    const errors = [];
    const warnings = [];
    const ids = new Set();
    const requiredEndorsementFields = [
      "id",
      "order",
      "title",
      "category",
      "cfr",
      "acRef",
      "sourcePage",
      "explanation",
      "verbatimText",
      "whoIssues",
      "expiration",
      "perFlight",
      "aliases",
      "tags",
    ];

    if (ENDORSEMENTS.length !== 96) {
      warnings.push("Expected 96 endorsements, found " + ENDORSEMENTS.length + ".");
    }

    ENDORSEMENTS.forEach((item, index) => {
      requiredEndorsementFields.forEach((field) => {
        if (typeof item[field] === "undefined") {
          errors.push("Endorsement at index " + index + " is missing field " + field + ".");
        }
      });
      if (ids.has(item.id)) {
        errors.push("Duplicate endorsement id " + item.id + ".");
      }
      ids.add(item.id);
      if (!Array.isArray(item.cfr)) {
        errors.push(item.id + " has non-array cfr.");
      }
      if (!Array.isArray(item.aliases)) {
        errors.push(item.id + " has non-array aliases.");
      }
      if (!Array.isArray(item.tags)) {
        errors.push(item.id + " has non-array tags.");
      }
    });

    if (errors.length) {
      console.error("[CFI Endorsement Navigator] Validation errors:", errors);
    }
    if (warnings.length) {
      console.warn("[CFI Endorsement Navigator] Validation warnings:", warnings);
    }
  }

  function validateBrowseStructure() {
    const errors = [];
    const warnings = [];
    const seenSubcategories = new Set();

    if (!BROWSE_STRUCTURE.length) {
      errors.push("BROWSE_STRUCTURE is missing or empty.");
    }

    BROWSE_STRUCTURE.forEach((entry, entryIndex) => {
      if (!entry || !entry.categoryId) {
        errors.push("Browse structure entry " + entryIndex + " is missing categoryId.");
        return;
      }
      if (!CATEGORY_MAP.has(entry.categoryId) || entry.categoryId === "all") {
        errors.push("Browse structure references unknown category " + entry.categoryId + ".");
      }
      if (!Array.isArray(entry.subcategories)) {
        errors.push("Browse structure category " + entry.categoryId + " has non-array subcategories.");
        return;
      }

      entry.subcategories.forEach((subcategory, subIndex) => {
        ["id", "label", "description", "primaryIds"].forEach((field) => {
          if (typeof subcategory[field] === "undefined") {
            errors.push(
              "Subcategory " +
              entry.categoryId +
              " at index " +
              subIndex +
              " is missing field " +
              field +
              ".",
            );
          }
        });

        if (seenSubcategories.has(subcategory.id)) {
          errors.push("Duplicate subcategory id " + subcategory.id + ".");
        }
        seenSubcategories.add(subcategory.id);

        if (!Array.isArray(subcategory.primaryIds) || !subcategory.primaryIds.length) {
          errors.push("Subcategory " + subcategory.id + " must include at least one primary id.");
        } else {
          subcategory.primaryIds.forEach((id) => {
            if (!ENDORSEMENT_MAP.has(id)) {
              errors.push("Subcategory " + subcategory.id + " references unknown primary id " + id + ".");
            }
          });
        }

        if (Array.isArray(subcategory.supplementalIds)) {
          subcategory.supplementalIds.forEach((id) => {
            if (!ENDORSEMENT_MAP.has(id)) {
              errors.push("Subcategory " + subcategory.id + " references unknown supplemental id " + id + ".");
            }
          });
        }
      });
    });

    CATEGORY_DEFS.forEach((category) => {
      if (category.id !== "all" && !BROWSE_MAP.has(category.id)) {
        warnings.push("No browse entry found for category " + category.id + ".");
      }
    });

    if (errors.length) {
      console.error("[CFI Endorsement Navigator] Browse validation errors:", errors);
    }
    if (warnings.length) {
      console.warn("[CFI Endorsement Navigator] Browse validation warnings:", warnings);
    }
  }

  function renderMeta() {
    if (dom.acVersionText) {
      dom.acVersionText.textContent = APP_META.display || "AC source unavailable";
    }

    if (dom.footerMeta) {
      const docLink = APP_META.documentPageUrl
        ? '<a href="' + escapeHtml(APP_META.documentPageUrl) + '" target="_blank" rel="noopener noreferrer">FAA document page</a>'
        : "";
      const pdfLink = APP_META.sourceUrl
        ? '<a href="' + escapeHtml(APP_META.sourceUrl) + '" target="_blank" rel="noopener noreferrer">official PDF</a>'
        : "";
      const parts = [escapeHtml(APP_META.display || "Source metadata unavailable")];
      if (docLink) {
        parts.push(docLink);
      }
      if (pdfLink) {
        parts.push(pdfLink);
      }
      dom.footerMeta.innerHTML = parts.join(" | ");
    }
  }

  function renderCategoryNav() {
    if (!dom.categoryNav) {
      return;
    }

    const counts = getCategoryCounts();
    const matchMap = getCategoryMatchMap();
    const allActive = state.category === "all" && !state.subcategory;

    const allButton =
      '<button type="button" class="all-button' +
      (allActive ? " is-active" : "") +
      '" data-action="all">' +
      "<span>All Endorsements</span>" +
      '<span class="category-count">' + escapeHtml(String(counts.all || 0)) + "</span>" +
      "</button>";

    const groups = CATEGORY_DEFS
      .filter((category) => category.id !== "all")
      .map((category) => {
        const entry = getCategoryEntry(category.id);
        const subcategories = entry && Array.isArray(entry.subcategories) ? entry.subcategories : [];
        const isOpen = state.openCategory === category.id;
        const isActive = state.category === category.id;
        const groupId = "subcategories-" + category.id;
        const matchDot = state.query && matchMap[category.id]
          ? '<span class="match-dot" aria-hidden="true"></span>'
          : "";

        const subcategoryMarkup = subcategories.length
          ? (
            '<div id="' +
            escapeHtml(groupId) +
            '" class="subcategory-list"' +
            (isOpen ? "" : " hidden") +
            ">" +
            subcategories.map((subcategory) => {
              const isSubActive = isActive && state.subcategory === subcategory.id;
              return (
                '<button type="button" class="subcategory-link' +
                (isSubActive ? " is-active" : "") +
                '" data-action="subcategory" data-category="' +
                escapeHtml(category.id) +
                '" data-subcategory="' +
                escapeHtml(subcategory.id) +
                '">' +
                escapeHtml(subcategory.label) +
                "</button>"
              );
            }).join("") +
            "</div>"
          )
          : "";

        return (
          '<section class="nav-group' +
          (isActive ? " is-active" : "") +
          (isOpen ? " is-open" : "") +
          '">' +
          '<button type="button" class="category-button" data-action="category" data-category="' +
          escapeHtml(category.id) +
          '" aria-expanded="' +
          String(isOpen) +
          '" aria-controls="' +
          escapeHtml(groupId) +
          '">' +
          '<span class="category-label-wrap">' +
          '<span class="category-label">' + escapeHtml(category.label) + "</span>" +
          matchDot +
          '<span class="category-count">' + escapeHtml(String(counts[category.id] || 0)) + "</span>" +
          "</span>" +
          '<span class="category-caret" aria-hidden="true">' +
          (subcategories.length ? (isOpen ? "−" : "+") : "") +
          "</span>" +
          "</button>" +
          subcategoryMarkup +
          "</section>"
        );
      })
      .join("");

    dom.categoryNav.innerHTML = allButton + groups;
  }

  function renderSelectionSummary() {
    const category = CATEGORY_MAP.get(state.category) || CATEGORY_MAP.get("all");
    const subcategory = getSelectedSubcategory();

    if (dom.selectionEyebrow) {
      dom.selectionEyebrow.textContent = subcategory ? category.label : (state.category === "all" ? "Browse" : "Category");
    }
    if (dom.selectionTitle) {
      dom.selectionTitle.textContent = subcategory ? subcategory.label : category.label;
    }
    if (dom.selectionDescription) {
      if (subcategory) {
        dom.selectionDescription.textContent = subcategory.note
          ? subcategory.description + " " + subcategory.note
          : subcategory.description;
      } else if (state.category === "all") {
        dom.selectionDescription.textContent = category.description;
      } else {
        dom.selectionDescription.textContent = category.description;
      }
    }

    renderBundleBar(subcategory);
  }

  function renderBundleBar(subcategory) {
    if (!dom.bundleBar) {
      return;
    }

    if (!subcategory || !Array.isArray(subcategory.supplementalIds) || !subcategory.supplementalIds.length) {
      dom.bundleBar.hidden = true;
      dom.bundleBar.innerHTML = "";
      return;
    }

    const chips = subcategory.supplementalIds
      .map((id) => '<span class="bundle-chip mono">' + escapeHtml(id) + "</span>")
      .join("");

    dom.bundleBar.hidden = false;
    dom.bundleBar.innerHTML =
      '<div class="bundle-copy">' +
      '<p class="bundle-label">' +
      escapeHtml(subcategory.supplementalLabel || "Also commonly included") +
      "</p>" +
      '<div class="bundle-chip-row">' + chips + "</div>" +
      "</div>" +
      '<button type="button" class="bundle-toggle" data-toggle-supplemental="true">' +
      (state.includeSupplemental ? "Show primary only" : "Show full bundle") +
      "</button>";
  }

  function renderResultsSummary(visibleCount, scopeCount) {
    if (!dom.resultsSummary) {
      return;
    }

    const category = CATEGORY_MAP.get(state.category) || CATEGORY_MAP.get("all");
    const subcategory = getSelectedSubcategory();
    const parts = [visibleCount + " of " + scopeCount + " endorsements"];

    if (subcategory) {
      parts.push(category.label + " / " + subcategory.label);
    } else if (state.category !== "all") {
      parts.push(category.label);
    }

    if (state.query) {
      parts.push('search "' + state.query + '"');
    }

    if (state.includeSupplemental && subcategory) {
      parts.push("full bundle");
    }

    dom.resultsSummary.textContent = parts.join("  |  ");
  }

  function renderEndorsementCard(item) {
    const expanded = state.expandedId === item.id;
    const badges = [];

    if (EXPIRATION_LABELS[item.expiration]) {
      badges.push('<span class="chip chip-warn">Time limit: ' + escapeHtml(EXPIRATION_LABELS[item.expiration]) + "</span>");
    }
    if (item.perFlight) {
      badges.push('<span class="chip chip-warn">Every XC flight</span>');
    }

    const details = expanded
      ? (
        '<div class="endorsement-details">' +
        '<section class="detail-section detail-section-wide">' +
        "<h4>FAA model text</h4>" +
        '<pre class="verbatim-block mono" data-verbatim-id="' + escapeHtml(item.id) + '">' + escapeHtml(item.verbatimText) + "</pre>" +
        '<button type="button" class="inline-action" data-copy-id="' + escapeHtml(item.id) + '">Copy FAA model text</button>' +
        "</section>" +
        '<div class="details-grid">' +
        '<section class="detail-section">' +
        "<h4>Plain-English explanation</h4>" +
        "<p>" + escapeHtml(item.explanation) + "</p>" +
        "</section>" +
        '<section class="detail-section">' +
        "<h4>CFR basis</h4>" +
        '<p class="mono">' + escapeHtml(item.cfr.join(" | ")) + "</p>" +
        "</section>" +
        '<section class="detail-section">' +
        "<h4>Source</h4>" +
        "<p>" + escapeHtml(item.acRef) + " | Page " + escapeHtml(item.sourcePage) + "</p>" +
        "</section>" +
        '<section class="detail-section">' +
        "<h4>Who issues it</h4>" +
        "<p>" + escapeHtml(ISSUER_LABELS[item.whoIssues] || "Standard CFI signoff") + "</p>" +
        "<p>" + escapeHtml(SIGNATURE_DISPLAY[item.whoIssues] || SIGNATURE_DISPLAY["standard-cfi"]) + "</p>" +
        "</section>" +
        "</div>" +
        "</div>"
      )
      : "";

    return (
      '<article class="endorsement-card" data-endorsement-id="' + escapeHtml(item.id) + '">' +
      '<div class="endorsement-head">' +
      '<div class="endorsement-id-row">' +
      '<span class="endorsement-id mono">' + escapeHtml(item.id) + "</span>" +
      '<div class="chip-row">' + badges.join("") + "</div>" +
      "</div>" +
      '<button type="button" class="inline-action" data-toggle-id="' + escapeHtml(item.id) + '" aria-expanded="' + String(expanded) + '">' +
      (expanded ? "Collapse" : "Expand") +
      "</button>" +
      "</div>" +
      "<h2>" + escapeHtml(item.title) + "</h2>" +
      '<p class="card-explanation">' + escapeHtml(item.explanation) + "</p>" +
      '<p class="card-meta mono">' +
      escapeHtml((CATEGORY_MAP.get(item.category) || {}).label || item.category) +
      " | " +
      escapeHtml(item.cfr.join(" | ")) +
      " | " +
      escapeHtml(item.sourcePage) +
      "</p>" +
      details +
      "</article>"
    );
  }

  function renderEndorsements() {
    if (!dom.endorsementList) {
      return;
    }

    const scoped = getScopedEndorsements();
    const visible = getVisibleEndorsements();
    renderResultsSummary(visible.length, scoped.length);

    if (!visible.length) {
      const subcategory = getSelectedSubcategory();
      const emptyHint = subcategory && !state.includeSupplemental && Array.isArray(subcategory.supplementalIds) && subcategory.supplementalIds.length
        ? "Try Show full bundle or clear the search."
        : "Try a broader keyword or switch to a different category.";

      dom.endorsementList.innerHTML =
        '<article class="placeholder-card empty-state">' +
        "<h2>No endorsements match this view</h2>" +
        "<p>" + escapeHtml(emptyHint) + "</p>" +
        "</article>";
      return;
    }

    dom.endorsementList.innerHTML = visible.map((item) => renderEndorsementCard(item)).join("");
  }

  function refresh() {
    renderCategoryNav();
    renderSelectionSummary();
    renderEndorsements();
  }

  function handleCopy(endorsementId, button) {
    const endorsement = ENDORSEMENT_MAP.get(endorsementId);
    if (!endorsement || !button) {
      return;
    }

    const text = endorsement.verbatimText;
    const showCopied = () => {
      const prior = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = prior;
      }, 900);
    };

    const fallbackCopy = () => {
      const block = dom.endorsementList
        ? dom.endorsementList.querySelector('[data-verbatim-id="' + CSS.escape(endorsementId) + '"]')
        : null;
      if (!block) {
        return;
      }

      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(block);
      selection.removeAllRanges();
      selection.addRange(range);
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
      return;
    }

    fallbackCopy();
  }

  function isMobileLayout() {
    return window.innerWidth <= 980;
  }

  function syncSidebarAccessibility() {
    if (!dom.filterRail) {
      return;
    }

    if (isMobileLayout()) {
      dom.filterRail.setAttribute("aria-hidden", String(!state.sidebarOpen));
      dom.filterRail.inert = !state.sidebarOpen;
      return;
    }

    dom.filterRail.removeAttribute("aria-hidden");
    dom.filterRail.inert = false;
  }

  function setSidebarOpen(isOpen) {
    state.sidebarOpen = Boolean(isOpen);
    document.body.classList.toggle("is-sidebar-open", state.sidebarOpen);

    if (dom.filterRail) {
      dom.filterRail.classList.toggle("is-open", state.sidebarOpen);
    }

    if (dom.sidebarToggleBtn) {
      dom.sidebarToggleBtn.setAttribute("aria-expanded", String(state.sidebarOpen));
    }

    if (dom.sidebarBackdrop) {
      dom.sidebarBackdrop.hidden = !state.sidebarOpen;
    }

    syncSidebarAccessibility();
  }

  function closeSidebar() {
    if (state.sidebarOpen) {
      setSidebarOpen(false);
    }
  }

  function attachEvents() {
    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", debounce((event) => {
        state.query = event.target.value || "";
        refresh();
      }, 150));
    }

    if (dom.sidebarToggleBtn) {
      dom.sidebarToggleBtn.addEventListener("click", () => {
        setSidebarOpen(!state.sidebarOpen);
      });
    }

    if (dom.sidebarBackdrop) {
      dom.sidebarBackdrop.addEventListener("click", closeSidebar);
    }

    if (dom.categoryNav) {
      dom.categoryNav.addEventListener("click", (event) => {
        const button = event.target.closest("[data-action]");
        if (!button) {
          return;
        }

        const action = button.getAttribute("data-action");
        if (action === "all") {
          state.category = "all";
          state.subcategory = null;
          state.includeSupplemental = false;
          state.openCategory = null;
          state.expandedId = null;
          closeSidebar();
          refresh();
          return;
        }

        if (action === "category") {
          const categoryId = button.getAttribute("data-category") || "all";
          const collapseActive = state.category === categoryId && state.subcategory === null && state.openCategory === categoryId;
          state.category = categoryId;
          state.subcategory = null;
          state.includeSupplemental = false;
          state.openCategory = collapseActive ? null : categoryId;
          state.expandedId = null;
          closeSidebar();
          refresh();
          return;
        }

        if (action === "subcategory") {
          state.category = button.getAttribute("data-category") || "all";
          state.subcategory = button.getAttribute("data-subcategory");
          state.includeSupplemental = false;
          state.openCategory = state.category;
          state.expandedId = null;
          closeSidebar();
          refresh();
        }
      });
    }

    if (dom.bundleBar) {
      dom.bundleBar.addEventListener("click", (event) => {
        const button = event.target.closest("[data-toggle-supplemental]");
        if (!button) {
          return;
        }
        state.includeSupplemental = !state.includeSupplemental;
        state.expandedId = null;
        refresh();
      });
    }

    if (dom.endorsementList) {
      dom.endorsementList.addEventListener("click", (event) => {
        const toggleButton = event.target.closest("[data-toggle-id]");
        if (toggleButton) {
          const id = toggleButton.getAttribute("data-toggle-id");
          state.expandedId = state.expandedId === id ? null : id;
          renderEndorsements();
          return;
        }

        const copyButton = event.target.closest("[data-copy-id]");
        if (copyButton) {
          handleCopy(copyButton.getAttribute("data-copy-id"), copyButton);
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeSidebar();
      }
      syncSidebarAccessibility();
    });
  }

  function boot() {
    validateData();
    validateBrowseStructure();
    renderMeta();
    refresh();
    syncSidebarAccessibility();
    attachEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
