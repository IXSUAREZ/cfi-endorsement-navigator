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

  const CATEGORY_THEMES = {
    all: {
      accent: "#1f5ed6",
      soft: "#e8f0ff",
      line: "#bfd4ff",
      ink: "#163b84",
    },
    "practical-test-prereqs": {
      accent: "#2f6fed",
      soft: "#eaf2ff",
      line: "#bfd3ff",
      ink: "#1d4ba8",
    },
    "student-pilot": {
      accent: "#1f77c7",
      soft: "#e7f5ff",
      line: "#b9def7",
      ink: "#155184",
    },
    "sport-pilot": {
      accent: "#0f8a83",
      soft: "#e7faf7",
      line: "#ade5df",
      ink: "#0d5f5a",
    },
    "recreational-pilot": {
      accent: "#2c9b6a",
      soft: "#eaf9ef",
      line: "#bfe6cb",
      ink: "#1f6a49",
    },
    "private-pilot": {
      accent: "#4867d6",
      soft: "#eef1ff",
      line: "#c8d2ff",
      ink: "#2f46a8",
    },
    "commercial-pilot": {
      accent: "#265f9f",
      soft: "#ebf4fd",
      line: "#bdd4ee",
      ink: "#1a4677",
    },
    atp: {
      accent: "#5b6b88",
      soft: "#eef2f8",
      line: "#ccd7e6",
      ink: "#3b4a63",
    },
    "instrument-rating": {
      accent: "#0f7ea8",
      soft: "#e8f7fc",
      line: "#b7e4f1",
      ink: "#0d5875",
    },
    "flight-instructor": {
      accent: "#b7791f",
      soft: "#fff5e8",
      line: "#f1d1aa",
      ink: "#8a5610",
    },
    "sport-pilot-instructor": {
      accent: "#c46a35",
      soft: "#fff1e8",
      line: "#f2c8ad",
      ink: "#8c4720",
    },
    "additional-recurrent": {
      accent: "#4d8b46",
      soft: "#edf7eb",
      line: "#c7e2c3",
      ink: "#2d6128",
    },
    "robinson-sfar73": {
      accent: "#b14e6b",
      soft: "#fff0f4",
      line: "#efc2cf",
      ink: "#7d3148",
    },
    "specialty-operations": {
      accent: "#7a5aa6",
      soft: "#f4effb",
      line: "#d8c7ef",
      ink: "#53377a",
    },
  };

  const TAG_PRIORITY = [
    "checkride",
    "practical test",
    "knowledge test",
    "solo",
    "cross country",
    "night",
    "instrument",
    "flight review",
    "ipc",
    "airspace",
    "spin",
    "tailwheel",
    "tsa",
  ];

  const CATEGORY_MAP = new Map(CATEGORY_DEFS.map((item) => [item.id, item]));
  const BROWSE_MAP = new Map(BROWSE_STRUCTURE.map((item) => [item.categoryId, item]));
  const ENDORSEMENT_MAP = new Map(ENDORSEMENTS.map((item) => [item.id, item]));
  const FEATURED_SUBCATEGORIES = BROWSE_STRUCTURE.flatMap((entry) => (
    Array.isArray(entry.subcategories)
      ? entry.subcategories
        .filter((subcategory) => subcategory.featured === true)
        .map((subcategory) => ({
          categoryId: entry.categoryId,
          subcategoryId: subcategory.id,
          subcategory,
        }))
      : []
  ));

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
    view: "browse",
  };

  const dom = {
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    searchInput: document.getElementById("searchInput"),
    categoryNav: document.getElementById("categoryNav"),
    endorsementList: document.getElementById("endorsementList"),
    resultsSummary: document.getElementById("resultsSummary"),
    selectionSummary: document.getElementById("selectionSummary"),
    selectionBreadcrumbs: document.getElementById("selectionBreadcrumbs"),
    selectionTitle: document.getElementById("selectionTitle"),
    selectionDescription: document.getElementById("selectionDescription"),
    selectionMeta: document.getElementById("selectionMeta"),
    selectionActions: document.getElementById("selectionActions"),
    bundleBar: document.getElementById("bundleBar"),
    featuredStrip: document.getElementById("featuredStrip"),
    footerMeta: document.getElementById("footerMeta"),
    filterRail: document.getElementById("filterRail"),
    sidebarToggleBtn: document.getElementById("sidebarToggleBtn"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    railCloseBtn: document.getElementById("railCloseBtn"),
    guidanceView: document.getElementById("guidanceView"),
    statusRow: document.querySelector(".status-row"),
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

  function getCategoryTheme(categoryId) {
    return CATEGORY_THEMES[categoryId] || CATEGORY_THEMES.all;
  }

  function getCategoryThemeStyle(categoryId) {
    const theme = getCategoryTheme(categoryId);
    return ' style="--category-accent: ' + theme.accent + ';"';
  }

  function applyCategoryTheme(element, categoryId) {
    if (!element) {
      return;
    }

    const theme = getCategoryTheme(categoryId);
    element.style.setProperty("--category-accent", theme.accent);
  }

  function renderMetaItem(value, classNames) {
    const classes = ["meta-item"];
    if (classNames) {
      classes.push(classNames);
    }
    return '<span class="' + classes.join(" ") + '">' + escapeHtml(value) + "</span>";
  }

  function renderWarnMetaItem(value) {
    return (
      '<span class="chip-warn">' +
      '<span class="warn-icon" aria-hidden="true"></span>' +
      '<span>' + escapeHtml(value) + "</span>" +
      "</span>"
    );
  }

  function debounce(fn, delay) {
    let timeoutId = null;
    return function debounced() {
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn.apply(null, args), delay);
    };
  }

  function syncSearchInput() {
    if (dom.searchInput) {
      dom.searchInput.value = state.query;
    }
    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.hidden = state.query === "";
    }
  }

  function setSearchQuery(value) {
    state.query = String(value || "");
    syncSearchInput();
  }

  function clearSearch() {
    setSearchQuery("");
  }

  function getCardExplanation(item) {
    return item.cardExplanation || item.explanation || "";
  }

  function buildSearchIndex(item) {
    return normalizeText(
      [
        item.id,
        item.title,
        getCardExplanation(item),
        item.explanation,
        item.verbatimText,
        item.acRef,
        Array.isArray(item.cfr) ? item.cfr.join(" ") : "",
        Array.isArray(item.aliases) ? item.aliases.join(" ") : "",
        Array.isArray(item.tags) ? item.tags.join(" ") : "",
      ].join(" "),
    );
  }

  function getTagPriority(tag) {
    const normalizedTag = normalizeText(tag);
    const index = TAG_PRIORITY.findIndex((priority) => normalizedTag.indexOf(priority) !== -1);
    return index === -1 ? TAG_PRIORITY.length : index;
  }

  function tagRepeatsCategory(normalizedTag, categoryLabel) {
    const tagTokens = normalizedTag.split(" ").filter(Boolean);
    const categoryTokens = categoryLabel.split(" ").filter(Boolean);

    if (!tagTokens.length || !categoryTokens.length) {
      return false;
    }

    const overlapCount = tagTokens.filter((token) => categoryTokens.includes(token)).length;
    return overlapCount === tagTokens.length || (overlapCount / tagTokens.length) >= 0.66;
  }

  function getDisplayTags(item) {
    const category = CATEGORY_MAP.get(item.category);
    const categoryLabel = normalizeText(category ? category.label : "");

    return (Array.isArray(item.tags) ? item.tags : [])
      .map((tag) => String(tag || "").trim())
      .filter(Boolean)
      .filter((tag, index, tags) => (
        tags.findIndex((candidate) => normalizeText(candidate) === normalizeText(tag)) === index
      ))
      .filter((tag) => {
        const normalizedTag = normalizeText(tag);

        if (!normalizedTag || !categoryLabel) {
          return Boolean(normalizedTag);
        }

        return (
          normalizedTag !== categoryLabel &&
          normalizedTag.indexOf(categoryLabel) === -1 &&
          categoryLabel.indexOf(normalizedTag) === -1 &&
          !tagRepeatsCategory(normalizedTag, categoryLabel)
        );
      })
      .sort((left, right) => {
        const leftPriority = getTagPriority(left);
        const rightPriority = getTagPriority(right);

        if (leftPriority !== rightPriority) {
          return leftPriority - rightPriority;
        }

        return left.localeCompare(right);
      })
      .slice(0, 2);
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

  function getSubcategoryContentRenderer(subcategory) {
    return subcategory && typeof subcategory.contentRenderer === "string"
      ? subcategory.contentRenderer
      : null;
  }

  function getPreSoloContent() {
    return window.PRE_SOLO_CONTENT || null;
  }

  function getPreSoloPrerequisiteCount() {
    const content = getPreSoloContent();
    return content && Array.isArray(content.prerequisites) ? content.prerequisites.length : 0;
  }

  function getItemNoun(subcategory) {
    return getSubcategoryContentRenderer(subcategory) === "pre-solo"
      ? "prerequisite"
      : "endorsement";
  }

  function formatItemCount(count, subcategory) {
    const noun = getItemNoun(subcategory);
    return String(count) + " " + noun + (count === 1 ? "" : "s");
  }

  function getBundleCount(subcategory) {
    if (!subcategory) {
      return 0;
    }

    if (getSubcategoryContentRenderer(subcategory) === "pre-solo") {
      return getPreSoloPrerequisiteCount();
    }

    const ids = new Set(Array.isArray(subcategory.primaryIds) ? subcategory.primaryIds : []);
    if (Array.isArray(subcategory.supplementalIds)) {
      subcategory.supplementalIds.forEach((id) => ids.add(id));
    }
    return ids.size;
  }

  function focusSelectionSummary() {
    if (dom.selectionSummary && typeof dom.selectionSummary.focus === "function") {
      dom.selectionSummary.focus({ preventScroll: true });
    }
  }

  function getStickyScrollOffset() {
    const topbar = document.querySelector(".topbar-sticky");
    const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
    return Math.ceil(topbarHeight + 20);
  }

  function scrollToTarget(target) {
    if (!target) {
      return;
    }

    const top = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - getStickyScrollOffset(),
    );
    window.scrollTo({ top, behavior: "smooth" });
  }

  function queueScrollToTarget(target) {
    if (!target) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToTarget(target);
      });
    });
  }

  function scrollToPageTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function queueScrollToPageTop() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToPageTop();
      });
    });
  }

  function activateAllEndorsements(options = {}) {
    if (!options.preserveQuery) {
      clearSearch();
    }

    state.view = "browse";
    state.category = "all";
    state.subcategory = null;
    state.includeSupplemental = false;
    state.expandedId = null;
    state.openCategory = null;

    if (options.closeSidebar !== false) {
      closeSidebar({ returnFocus: false });
    }

    refresh();

    if (options.scroll !== false) {
      window.requestAnimationFrame(() => {
        focusSelectionSummary();
      });
      queueScrollToPageTop();
    }
  }

  function activateCategory(categoryId, options = {}) {
    if (!categoryId || categoryId === "all") {
      activateAllEndorsements(options);
      return;
    }

    if (!options.preserveQuery) {
      clearSearch();
    }

    state.view = "browse";
    state.category = categoryId;
    state.subcategory = null;
    state.includeSupplemental = false;
    state.expandedId = null;
    state.openCategory = categoryId;

    if (options.closeSidebar !== false) {
      closeSidebar({ returnFocus: false });
    }

    refresh();

    if (options.scroll !== false) {
      window.requestAnimationFrame(() => {
        focusSelectionSummary();
      });
      queueScrollToPageTop();
    }
  }

  function activateSubcategory(categoryId, subcategoryId, options = {}) {
    if (!categoryId || !subcategoryId) {
      return;
    }

    if (!options.preserveQuery) {
      clearSearch();
    }

    state.view = "browse";
    state.category = categoryId;
    state.subcategory = subcategoryId;
    state.includeSupplemental = false;
    state.expandedId = null;
    state.openCategory = categoryId;

    if (options.closeSidebar !== false) {
      closeSidebar({ returnFocus: false });
    }

    refresh();

    if (options.scroll !== false) {
      window.requestAnimationFrame(() => {
        focusSelectionSummary();
      });
      queueScrollToPageTop();
    }
  }

  function activateGuidance(options = {}) {
    if (!options.preserveQuery) {
      clearSearch();
    }

    state.view = "guidance";
    state.category = "all";
    state.subcategory = null;
    state.expandedId = null;

    if (options.closeSidebar !== false) {
      closeSidebar({ returnFocus: false });
    }

    document.title = "Teaching & Guidance \u2013 Simply Endorsed";
    refresh();

    if (options.scroll !== false) {
      queueScrollToPageTop();
    }
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
      if (
        typeof item.cardExplanation !== "undefined" &&
        typeof item.cardExplanation !== "string"
      ) {
        errors.push(item.id + " has non-string cardExplanation.");
      }
      if (typeof item.cardExplanation === "undefined") {
        warnings.push(
          item.id + " is missing cardExplanation; condensed cards will fall back to explanation.",
        );
      }
    });

    if (errors.length) {
      console.error("[Simply Endorsed] Validation errors:", errors);
    }
    if (warnings.length) {
      console.warn("[Simply Endorsed] Validation warnings:", warnings);
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

        if (!Array.isArray(subcategory.primaryIds)) {
          errors.push("Subcategory " + subcategory.id + " must define primaryIds as an array.");
        } else if (!subcategory.primaryIds.length && !getSubcategoryContentRenderer(subcategory)) {
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
      console.error("[Simply Endorsed] Browse validation errors:", errors);
    }
    if (warnings.length) {
      console.warn("[Simply Endorsed] Browse validation warnings:", warnings);
    }
  }

  function renderMeta() {
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
    const allActive = state.category === "all" && !state.subcategory && state.view !== "guidance";

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
        const isCategoryActive = isActive && !state.subcategory;
        const groupId = "subcategories-" + category.id;
        const matchDot = state.query && matchMap[category.id]
          ? '<span class="match-dot" aria-hidden="true"></span>'
          : "";

        const subcategoryMarkup =
          '<div id="' +
          escapeHtml(groupId) +
          '" class="subcategory-list"' +
          (isOpen ? "" : " hidden") +
          ">" +
          '<button type="button" class="view-category-link' +
          (isCategoryActive ? " is-active" : "") +
          '" data-action="view-category" data-category="' +
          escapeHtml(category.id) +
          '">' +
          "View all " +
          escapeHtml(category.label) +
          "</button>" +
          subcategories.map((subcategory) => {
            const isPreSoloSub = subcategory.id === "pre-solo";
            const isSubActive = isActive && state.subcategory === subcategory.id;
            const startHereBadge = isPreSoloSub
              ? '<span class="start-here-badge" aria-hidden="true">Start here</span>'
              : "";
            return (
              '<button type="button" class="subcategory-link' +
              (isSubActive ? " is-active" : "") +
              '" data-action="subcategory" data-category="' +
              escapeHtml(category.id) +
              '" data-subcategory="' +
              escapeHtml(subcategory.id) +
              '">' +
              escapeHtml(subcategory.label) +
              startHereBadge +
              "</button>"
            );
          }).join("") +
          "</div>";

        return (
          '<section class="nav-group' +
          (isActive ? " is-active" : "") +
          (isCategoryActive ? " is-view-active" : "") +
          (isOpen ? " is-open" : "") +
          '"' +
          getCategoryThemeStyle(category.id) +
          ">" +
          '<button type="button" class="category-button" data-action="toggle-category" data-category="' +
          escapeHtml(category.id) +
          '" aria-expanded="' +
          String(isOpen) +
          '" aria-controls="' +
          escapeHtml(groupId) +
          '">' +
          '<span class="category-label-wrap">' +
          '<span class="category-swatch" aria-hidden="true"></span>' +
          '<span class="category-label">' + escapeHtml(category.label) + "</span>" +
          matchDot +
          '<span class="category-count">' + escapeHtml(String(counts[category.id] || 0)) + "</span>" +
          "</span>" +
          '<span class="category-caret" aria-hidden="true">' +
          (isOpen ? "▾" : "›") +
          "</span>" +
          "</button>" +
          subcategoryMarkup +
          "</section>"
        );
      })
      .join("");

    const guidanceActive = state.view === "guidance";
    const guidanceButton =
      '<div class="rail-divider" aria-hidden="true"></div>' +
      '<button type="button" class="all-button guidance-nav-btn' +
      (guidanceActive ? " is-active" : "") +
      '" data-action="activate-guidance">' +
      "<span>Teaching &amp; Guidance</span>" +
      "</button>";

    dom.categoryNav.innerHTML = allButton + groups + guidanceButton;
  }

  function renderSelectionBreadcrumbs(category, subcategory) {
    if (!dom.selectionBreadcrumbs) {
      return;
    }

    const crumbs = [];
    if (state.category === "all" && !subcategory) {
      crumbs.push('<span class="breadcrumb-current" aria-current="page">All Endorsements</span>');
    } else {
      crumbs.push('<button type="button" class="breadcrumb-button" data-action="all">All Endorsements</button>');
    }

    if (state.category !== "all") {
      if (subcategory) {
        crumbs.push(
          '<button type="button" class="breadcrumb-button" data-action="view-category" data-category="' +
          escapeHtml(category.id) +
          '">' +
          escapeHtml(category.label) +
          "</button>",
        );
        crumbs.push('<span class="breadcrumb-current" aria-current="page">' + escapeHtml(subcategory.label) + "</span>");
      } else {
        crumbs.push('<span class="breadcrumb-current" aria-current="page">' + escapeHtml(category.label) + "</span>");
      }
    }

    dom.selectionBreadcrumbs.innerHTML = crumbs.join('<span class="breadcrumb-separator" aria-hidden="true">›</span>');
  }

  function renderSelectionActions() {
    if (!dom.selectionActions) {
      return;
    }

    const actions = [];
    const category = CATEGORY_MAP.get(state.category);

    if (state.subcategory && category) {
      actions.push(
        '<button type="button" class="selection-reset" data-action="view-category" data-category="' +
        escapeHtml(category.id) +
        '">' +
        "View " +
        escapeHtml(category.label) +
        "</button>",
      );
    }

    if (state.category !== "all") {
      actions.push('<button type="button" class="selection-reset" data-action="all">Back to All Endorsements</button>');
    }

    if (state.query) {
      actions.push('<button type="button" class="selection-reset" data-action="clear-search">Clear search</button>');
    }

    dom.selectionActions.innerHTML = actions.join("");
  }

  function renderSelectionMeta() {
    if (!dom.selectionMeta) {
      return;
    }

    const subcategory = getSelectedSubcategory();
    const renderer = getSubcategoryContentRenderer(subcategory);
    const scopedCount = subcategory ? getBundleCount(subcategory) : getScopedEndorsements().length;
    const items = [renderMetaItem(formatItemCount(scopedCount, subcategory) + " in scope")];

    if (state.category === "all") {
      items.push(renderMetaItem(
        String(CATEGORY_DEFS.filter((category) => category.id !== "all").length) + " browse categories",
      ));
    }

    if (state.query && renderer !== "pre-solo") {
      items.push(renderMetaItem('Search "' + state.query + '"'));
    }

    if (subcategory) {
      items.push(renderMetaItem(formatItemCount(getBundleCount(subcategory), subcategory) + " in this path"));
    }

    if (state.includeSupplemental && subcategory) {
      items.push(renderMetaItem("Showing full bundle"));
    }

    dom.selectionMeta.innerHTML = items.join("");
  }

  function renderSelectionSummary() {
    const category = CATEGORY_MAP.get(state.category) || CATEGORY_MAP.get("all");
    const subcategory = getSelectedSubcategory();
    const renderer = getSubcategoryContentRenderer(subcategory);
    const themeCategoryId = category && category.id ? category.id : "all";

    applyCategoryTheme(dom.selectionSummary, themeCategoryId);

    renderSelectionBreadcrumbs(category, subcategory);

    if (dom.selectionTitle) {
      dom.selectionTitle.innerHTML =
        '<span class="selection-title-wrap">' +
        '<span class="category-dot" aria-hidden="true"></span>' +
        "<span>" + escapeHtml(subcategory ? subcategory.label : category.label) + "</span>" +
        "</span>";
    }
    if (dom.selectionDescription) {
      if (subcategory) {
        if (renderer === "pre-solo") {
          const preSoloContent = getPreSoloContent();
          dom.selectionDescription.textContent = preSoloContent && preSoloContent.intro
            ? preSoloContent.intro
            : subcategory.description;
        } else {
          dom.selectionDescription.textContent = subcategory.note
            ? subcategory.description + " " + subcategory.note
            : subcategory.description;
        }
      } else if (state.category === "all") {
        dom.selectionDescription.textContent = category.description;
      } else {
        dom.selectionDescription.textContent = category.description;
      }
    }

    renderSelectionMeta();
    renderSelectionActions();
    renderBundleBar(subcategory);
  }

  function renderBundleBar(subcategory) {
    if (!dom.bundleBar) {
      return;
    }

    if (
      !subcategory ||
      getSubcategoryContentRenderer(subcategory) ||
      !Array.isArray(subcategory.supplementalIds) ||
      !subcategory.supplementalIds.length
    ) {
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
    const renderer = getSubcategoryContentRenderer(subcategory);
    const scopeLabel = subcategory
      ? category.label + " / " + subcategory.label
      : category.label;
    const searchApplies = Boolean(state.query) && renderer !== "pre-solo";
    const scopePrefix = (searchApplies ? "Searching " : "Viewing ") + scopeLabel + " — ";
    const countLabel = searchApplies
      ? visibleCount + " of " + scopeCount + " " + getItemNoun(subcategory) + (scopeCount === 1 ? "" : "s")
      : formatItemCount(visibleCount, subcategory);
    const parts = [countLabel];

    if (searchApplies) {
      parts.push('search "' + state.query + '"');
    }

    if (state.includeSupplemental && subcategory) {
      parts.push("full bundle");
    }

    dom.resultsSummary.textContent = scopePrefix + parts.join("  |  ");
  }

  function renderEndorsementCard(item) {
    const expanded = state.expandedId === item.id;
    const metaItems = [];
    const detailSections = [];
    const cardExplanation = getCardExplanation(item);
    const detailTags = Array.isArray(item.tags) ? item.tags.filter(Boolean) : [];

    if (EXPIRATION_LABELS[item.expiration]) {
      metaItems.push(renderWarnMetaItem("Time limit " + EXPIRATION_LABELS[item.expiration]));
    }
    if (item.perFlight) {
      metaItems.push(renderWarnMetaItem("Every XC flight"));
    }
    if (Array.isArray(item.cfr) && item.cfr.length) {
      metaItems.push(renderMetaItem(item.cfr.join(" | "), "mono"));
    }
    metaItems.push(renderMetaItem("Page " + item.sourcePage, "mono"));

    if (cardExplanation) {
      detailSections.push(
        '<section class="detail-section">' +
        "<h4>At a glance</h4>" +
        "<p>" + escapeHtml(cardExplanation) + "</p>" +
        "</section>",
      );
    }
    if (item.explanation) {
      detailSections.push(
        '<section class="detail-section">' +
        "<h4>Why This Matters</h4>" +
        "<p>" + escapeHtml(item.explanation).replace(/\n/g, "<br>") + "</p>" +
        "</section>",
      );
    }
    detailSections.push(
      '<section class="detail-section">' +
      "<h4>CFR basis</h4>" +
      '<p class="mono">' + escapeHtml(item.cfr.join(" | ")) + "</p>" +
      "</section>",
    );
    detailSections.push(
      '<section class="detail-section">' +
      "<h4>Source</h4>" +
      "<p>" + escapeHtml(item.acRef) + " | Page " + escapeHtml(item.sourcePage) + "</p>" +
      "</section>",
    );
    detailSections.push(
      '<section class="detail-section">' +
      "<h4>Who issues it</h4>" +
      "<p>" + escapeHtml(ISSUER_LABELS[item.whoIssues] || "Standard CFI signoff") + "</p>" +
      "<p>" + escapeHtml(SIGNATURE_DISPLAY[item.whoIssues] || SIGNATURE_DISPLAY["standard-cfi"]) + "</p>" +
      "</section>",
    );
    if (detailTags.length) {
      detailSections.push(
        '<section class="detail-section">' +
        "<h4>Tags</h4>" +
        "<p>" + escapeHtml(detailTags.join(" | ")) + "</p>" +
        "</section>",
      );
    }

    const details = expanded
      ? (
        '<div class="endorsement-details">' +
        '<section class="detail-section detail-section-wide">' +
        "<h4>FAA model text</h4>" +
        '<pre class="verbatim-block mono" data-verbatim-id="' + escapeHtml(item.id) + '">' + escapeHtml(item.verbatimText) + "</pre>" +
        '<button type="button" class="inline-action" data-copy-id="' + escapeHtml(item.id) + '">Copy FAA model text</button>' +
        "</section>" +
        '<div class="details-grid">' + detailSections.join("") + "</div>" +
        "</div>"
      )
      : "";

    return (
      '<article class="endorsement-card" data-endorsement-id="' +
      escapeHtml(item.id) +
      '"' +
      getCategoryThemeStyle(item.category) +
      ">" +
      '<div class="endorsement-head">' +
      '<div class="endorsement-id-row">' +
      '<span class="category-dot" aria-hidden="true"></span>' +
      '<span class="endorsement-id mono">' + escapeHtml(item.id) + "</span>" +
      "</div>" +
      '<button type="button" class="detail-toggle" data-toggle-id="' + escapeHtml(item.id) + '" aria-expanded="' + String(expanded) + '">' +
      '<span>' + (expanded ? "Hide details" : "View details") + "</span>" +
      '<span class="detail-toggle-caret" aria-hidden="true">' + (expanded ? "−" : "›") + "</span>" +
      "</button>" +
      "</div>" +
      "<h2>" + escapeHtml(item.title) + "</h2>" +
      '<div class="meta-line">' + metaItems.join("") + "</div>" +
      details +
      "</article>"
    );
  }

  function renderBundleSections(primaryItems, supplementalItems, supplementalLabel) {
    const sectionA = 
      '<div class="bundle-section-label"><h3>Primary endorsements</h3></div>' +
      primaryItems.map((item) => renderEndorsementCard(item)).join("");
      
    const sectionBNote = supplementalLabel
      ? '<p class="bundle-section-note">' + escapeHtml(supplementalLabel) + "</p>"
      : "";
    const sectionB = 
      '<div class="bundle-section-label is-supplemental"><h3>Also commonly included</h3>' + sectionBNote + '</div>' +
      supplementalItems.map((item) => renderEndorsementCard(item)).join("");
      
    return sectionA + sectionB;
  }

  function renderFeaturedStrip() {
    if (!dom.featuredStrip) {
      return;
    }

    const strip = dom.featuredStrip;

    if (state.category !== "all" || state.query !== "") {
      strip.hidden = true;
      return;
    }

    if (!FEATURED_SUBCATEGORIES.length) {
      strip.hidden = true;
      strip.innerHTML = "";
      return;
    }

    strip.hidden = false;
    strip.innerHTML =
      '<div class="featured-intro">' +
      '<p class="featured-strip-label">Quick Starts</p>' +
      "<h3>Jump into the endorsement paths instructors reach for most often.</h3>" +
      "<p>Use a curated path instead of scanning the entire library.</p>" +
      "</div>" +
      '<div class="featured-grid">' +
      FEATURED_SUBCATEGORIES.map((item) => {
        const category = CATEGORY_MAP.get(item.categoryId) || {};
        return (
          '<button type="button" class="featured-card" data-featured-category="' +
          escapeHtml(item.categoryId) +
          '" data-featured-subcategory="' +
          escapeHtml(item.subcategoryId) +
          '">' +
          '<span class="featured-card-category">' + escapeHtml(category.label || item.categoryId) + "</span>" +
          '<span class="featured-card-title">' + escapeHtml(item.subcategory.label) + "</span>" +
          '<span class="featured-card-description">' + escapeHtml(item.subcategory.description) + "</span>" +
          '<span class="featured-card-meta">' + escapeHtml(String(getBundleCount(item.subcategory))) + ' endorsements in path</span>' +
          "</button>"
        );
      }).join("") +
      "</div>";
  }

  function renderEndorsements() {
    if (!dom.endorsementList) {
      return;
    }

    const subcategory = getSelectedSubcategory();
    const renderer = getSubcategoryContentRenderer(subcategory);

    if (renderer === "pre-solo") {
      const content = getPreSoloContent();
      const count = getPreSoloPrerequisiteCount();
      renderResultsSummary(count, count);
      dom.endorsementList.innerHTML = renderPreSoloContent(content);
      return;
    }

    const scoped = getScopedEndorsements();
    const visible = getVisibleEndorsements();
    renderResultsSummary(visible.length, scoped.length);

    if (!visible.length) {
      const emptyHint = subcategory && !state.includeSupplemental && Array.isArray(subcategory.supplementalIds) && subcategory.supplementalIds.length
        ? "Try Show full bundle or clear the search."
        : "Try a broader keyword or switch to a different category.";

      let additionalButton = "";
      if (state.query !== "" && state.category !== "all") {
        additionalButton = '<button type="button" data-action="search-all" data-query="' + escapeHtml(state.query) + '">Search all endorsements for "' + escapeHtml(state.query) + '"</button>';
      }

      dom.endorsementList.innerHTML =
        '<article class="placeholder-card empty-state">' +
        "<h2>No endorsements match this view</h2>" +
        "<p>" + escapeHtml(emptyHint) + "</p>" +
        additionalButton +
        "</article>";
      return;
    }

    if (state.includeSupplemental && subcategory && Array.isArray(subcategory.supplementalIds) && subcategory.supplementalIds.length) {
      const primaryItems = visible.filter((item) => subcategory.primaryIds.includes(item.id));
      const supplementalItems = visible.filter((item) => subcategory.supplementalIds.includes(item.id) && !subcategory.primaryIds.includes(item.id));
      dom.endorsementList.innerHTML = renderBundleSections(primaryItems, supplementalItems, subcategory.supplementalLabel || "");
    } else {
      dom.endorsementList.innerHTML = visible.map((item) => renderEndorsementCard(item)).join("");
    }
  }

  function refresh() {
    const isGuidance = state.view === "guidance";
    if (!isGuidance) document.title = "Simply Endorsed";

    if (dom.selectionSummary) dom.selectionSummary.hidden = isGuidance;
    if (dom.statusRow) dom.statusRow.hidden = isGuidance;
    if (dom.endorsementList) dom.endorsementList.hidden = isGuidance;
    if (dom.featuredStrip) dom.featuredStrip.hidden = true;

    renderCategoryNav();

    if (!isGuidance) {
      renderFeaturedStrip();
      renderSelectionSummary();
      renderEndorsements();
    }

    renderGuidanceView();
  }

  function renderGuidanceContentBlock(block) {
    var h = escapeHtml;
    if (block.type === "p") {
      return "<p>" + h(block.value) + "</p>";
    }
    if (block.type === "h3") {
      return "<h3>" + h(block.value) + "</h3>";
    }
    if (block.type === "ul") {
      return (
        "<ul>" +
        block.value.map(function (item) { return "<li>" + h(item) + "</li>"; }).join("") +
        "</ul>"
      );
    }
    if (block.type === "ol") {
      return (
        "<ol>" +
        block.value.map(function (item) { return "<li>" + h(item) + "</li>"; }).join("") +
        "</ol>"
      );
    }
    return "";
  }

  function renderGuidanceView() {
    if (!dom.guidanceView) return;

    if (state.view !== "guidance") {
      dom.guidanceView.hidden = true;
      return;
    }

    dom.guidanceView.hidden = false;

    if (typeof GUIDANCE_SECTIONS === "undefined") {
      dom.guidanceView.innerHTML = "<p>Guidance content unavailable.</p>";
      return;
    }

    var tocItems = GUIDANCE_SECTIONS.map(function (section) {
      return (
        '<li><a class="guidance-toc-link" href="#gs-' +
        escapeHtml(section.id) +
        '">' +
        escapeHtml(section.title) +
        "</a></li>"
      );
    }).join("");

    var cards = GUIDANCE_SECTIONS.map(function (section) {
      var bodyId = "gs-" + escapeHtml(section.id);
      var bodyHtml = section.content.map(renderGuidanceContentBlock).join("");
      return (
        '<div class="guidance-card" id="' + escapeHtml(section.id) + '">' +
        '<button type="button" class="guidance-toggle" aria-expanded="false" aria-controls="' + bodyId + '">' +
        "<span>" + escapeHtml(section.title) + "</span>" +
        '<span class="detail-toggle-caret" aria-hidden="true">+</span>' +
        "</button>" +
        '<div id="' + bodyId + '" class="guidance-body" hidden>' +
        bodyHtml +
        "</div>" +
        "</div>"
      );
    }).join("");

    dom.guidanceView.innerHTML =
      '<div class="guidance-header">' +
      '<p class="guidance-eyebrow">Instructor Resource</p>' +
      "<h2>Teaching &amp; Guidance</h2>" +
      '<p class="guidance-description">A structured reference for CFI lesson II.K &mdash; Endorsements &amp; Logbook Entries. Select a section to expand.</p>' +
      "</div>" +
      '<nav class="guidance-toc" aria-label="Section navigation">' +
      "<ul>" + tocItems + "</ul>" +
      "</nav>" +
      '<div class="guidance-cards">' + cards + "</div>";
  }

  function renderPreSoloPrerequisiteCard(item) {
    var h = escapeHtml;
    var refs = Array.isArray(item.refs) ? item.refs.join(" | ") : "";
    return (
      '<article class="endorsement-card endorsement-card--prerequisite"' +
      getCategoryThemeStyle("student-pilot") +
      ">" +
      '<div class="endorsement-head">' +
      '<div class="endorsement-id-row">' +
      '<span class="category-dot" aria-hidden="true"></span>' +
      '<span class="endorsement-id mono">' + h(item.id) + "</span>" +
      '<span class="pre-solo-badge">Prerequisite</span>' +
      "</div>" +
      "</div>" +
      "<h2>" + h(item.title) + "</h2>" +
      '<p class="prereq-description">' + h(item.description) + "</p>" +
      '<div class="meta-line">' +
      '<span class="meta-item">Student Pilot</span>' +
      '<span class="meta-item mono">' + h(refs) + "</span>" +
      "</div>" +
      "</article>"
    );
  }

  function renderPreSoloPrerequisiteCards(items) {
    if (!Array.isArray(items) || !items.length) {
      return "";
    }

    return (
      '<div class="endorsement-list pre-solo-card-list">' +
      items.map(renderPreSoloPrerequisiteCard).join("") +
      "</div>"
    );
  }

  function renderPreSoloContent(content) {
    if (!content) {
      return (
        '<article class="placeholder-card empty-state">' +
        "<h2>Pre-solo content unavailable</h2>" +
        "<p>The Student Pilot / Pre-Solo prerequisites could not be loaded.</p>" +
        "</article>"
      );
    }

    return (
      '<div class="pre-solo-body">' +
      renderPreSoloPrerequisiteCards(content.prerequisites) +
      renderAccordionSections(content.accordionSections) +
      "</div>"
    );
  }

  function renderAccordionBodyBlocks(blocks) {
    var h = escapeHtml;
    return blocks.map(function(block) {
      if (block.type === "h4") {
        return '<h4 class="prereq-accordion-h4">' + h(block.value) + '</h4>';
      }
      return renderGuidanceContentBlock(block);
    }).join("");
  }

  function renderAccordionSections(sections) {
    var h = escapeHtml;
    var sectionsHtml = sections.map(function(section) {
      var bodyHtml;
      if (section.type === "resources") {
        var linksHtml = section.links.map(function(link) {
          return (
            '<li><a class="pre-solo-resource-link" href="' + h(link.url) + '" target="_blank" rel="noopener noreferrer">' +
            h(link.label) + ' \u2197</a></li>'
          );
        }).join("");
        var regsHtml = section.regs.map(function(reg) {
          return '<li>' + h(reg) + '</li>';
        }).join("");
        bodyHtml =
          '<ul class="pre-solo-link-list">' + linksHtml + '</ul>' +
          '<h4 class="prereq-accordion-h4">Applicable Regulations &amp; Guidance</h4>' +
          '<ul>' + regsHtml + '</ul>';
      } else {
        bodyHtml = renderAccordionBodyBlocks(section.blocks);
      }
      return (
        '<details class="prereq-accordion">' +
        '<summary class="prereq-accordion-summary">' + h(section.heading) + '</summary>' +
        '<div class="prereq-accordion-body">' + bodyHtml + '</div>' +
        '</details>'
      );
    }).join("");
    return '<div class="prereq-accordions">' + sectionsHtml + '</div>';
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
    return window.innerWidth < 900;
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

  function setSidebarOpen(isOpen, options = {}) {
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

    if (isOpen) {
      window.requestAnimationFrame(() => {
        const closeBtn = dom.filterRail && dom.filterRail.querySelector('.rail-close');
        if (closeBtn) closeBtn.focus();
      });
    } else if (options.returnFocus !== false) {
      window.requestAnimationFrame(() => {
        if (dom.sidebarToggleBtn) dom.sidebarToggleBtn.focus();
      });
    }
  }

  function closeSidebar(options = {}) {
    if (state.sidebarOpen) {
      setSidebarOpen(false, options);
    }
  }

  function attachEvents() {
    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", debounce((event) => {
        setSearchQuery(event.target.value || "");
        refresh();
      }, 150));
    }

    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.addEventListener("click", () => {
        clearSearch();
        refresh();
        if (dom.searchInput) {
          dom.searchInput.focus();
        }
      });
    }

    if (dom.sidebarToggleBtn) {
      dom.sidebarToggleBtn.addEventListener("click", () => {
        setSidebarOpen(!state.sidebarOpen);
      });
    }

    if (dom.railCloseBtn) {
      dom.railCloseBtn.addEventListener("click", () => {
        closeSidebar();
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
          activateAllEndorsements();
          return;
        }

        if (action === "toggle-category") {
          const categoryId = button.getAttribute("data-category") || "all";
          state.openCategory = state.openCategory === categoryId ? null : categoryId;
          renderCategoryNav();
          return;
        }

        if (action === "view-category") {
          activateCategory(button.getAttribute("data-category") || "all");
          return;
        }

        if (action === "subcategory") {
          activateSubcategory(
            button.getAttribute("data-category") || "all",
            button.getAttribute("data-subcategory"),
          );
          return;
        }

        if (action === "activate-guidance") {
          activateGuidance();
        }
      });
    }

    if (dom.selectionSummary) {
      dom.selectionSummary.addEventListener("click", (event) => {
        const button = event.target.closest("[data-action]");
        if (!button) {
          return;
        }

        const action = button.getAttribute("data-action");
        if (action === "all") {
          activateAllEndorsements();
          return;
        }

        if (action === "view-category") {
          activateCategory(button.getAttribute("data-category") || "all");
          return;
        }

        if (action === "clear-search") {
          clearSearch();
          refresh();
          if (dom.searchInput) {
            dom.searchInput.focus();
          }
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
          return;
        }

        const searchAllBtn = event.target.closest('[data-action="search-all"]');
        if (searchAllBtn) {
          activateAllEndorsements({ preserveQuery: true, closeSidebar: false });
          return;
        }
      });
    }

    if (dom.featuredStrip) {
      dom.featuredStrip.addEventListener("click", (event) => {
        const button = event.target.closest("[data-featured-subcategory]");
        if (!button) {
          return;
        }

        activateSubcategory(
          button.getAttribute("data-featured-category"),
          button.getAttribute("data-featured-subcategory"),
          { closeSidebar: false },
        );
      });
    }

    if (dom.guidanceView) {
      dom.guidanceView.addEventListener("click", (event) => {
        const toggle = event.target.closest(".guidance-toggle");
        if (toggle) {
          const expanded = toggle.getAttribute("aria-expanded") === "true";
          const bodyId = toggle.getAttribute("aria-controls");
          const body = bodyId ? document.getElementById(bodyId) : null;
          const caret = toggle.querySelector(".detail-toggle-caret");

          toggle.setAttribute("aria-expanded", String(!expanded));
          if (body) body.hidden = expanded;
          if (caret) caret.textContent = expanded ? "+" : "\u2013";
          return;
        }

        const tocLink = event.target.closest(".guidance-toc-link");
        if (tocLink) {
          event.preventDefault();
          const targetId = tocLink.getAttribute("href").replace("#gs-", "");
          const card = dom.guidanceView.querySelector("#" + CSS.escape(targetId));
          if (card) {
            const toggle2 = card.querySelector(".guidance-toggle");
            const bodyId2 = toggle2 && toggle2.getAttribute("aria-controls");
            const body2 = bodyId2 ? document.getElementById(bodyId2) : null;
            const caret2 = toggle2 && toggle2.querySelector(".detail-toggle-caret");
            if (toggle2 && body2 && body2.hidden) {
              toggle2.setAttribute("aria-expanded", "true");
              body2.hidden = false;
              if (caret2) caret2.textContent = "\u2013";
            }
            scrollToTarget(card);
          }
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900) {
        closeSidebar();
      }
      syncSidebarAccessibility();
    });
  }

  function boot() {
    validateData();
    validateBrowseStructure();
    renderMeta();
    syncSearchInput();
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
