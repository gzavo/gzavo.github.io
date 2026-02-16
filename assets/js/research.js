document.addEventListener("DOMContentLoaded", function () {
  var pathname = window.location.pathname || "";
  var isResearchPage =
    pathname === "/research/" ||
    pathname === "/research" ||
    pathname.endsWith("/research/") ||
    pathname.endsWith("/research");
  var isProjectPage = pathname.indexOf("/projects/") !== -1;

  if (!isResearchPage && !isProjectPage) {
    return;
  }

  document.body.classList.add("js-research");

  var revealItems = document.querySelectorAll(".reveal-on-scroll");
  if (revealItems.length > 0) {
    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }
  }

  var chips = Array.prototype.slice.call(document.querySelectorAll(".research-chip[data-target]"));
  if (chips.length === 0) {
    return;
  }

  var sections = chips
    .map(function (chip) {
      var targetId = chip.getAttribute("data-target");
      return document.getElementById(targetId);
    })
    .filter(Boolean);

  var setActiveChip = function (targetId) {
    chips.forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-target") === targetId);
    });
  };

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      setActiveChip(chip.getAttribute("data-target"));
    });
  });

  if (sections.length === 0) {
    return;
  }

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveChip(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0.01
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  } else {
    var onScroll = function () {
      var candidate = sections[0];
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          candidate = section;
        }
      });
      setActiveChip(candidate.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  setActiveChip(sections[0].id);
});
