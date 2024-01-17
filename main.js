document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.querySelector(".tabs-box"),
        allTabElements = containerElement.querySelectorAll(".tab"),
        arrowIcons = document.querySelectorAll(".icon i");

    let isDragging = false;

    const handleIcons = (scrollValue) => {
        let maxScrollableWidth = containerElement.scrollWidth - containerElement.clientWidth;
        arrowIcons[0].parentElement.style.display = scrollValue <= 0 ? "none" : "flex";
        arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollValue <= 1 ? "none" : "flex";
    };

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            let scrollWidth = (containerElement.scrollLeft +=
                icon.id === "left" ? -340 : 340);
            handleIcons(scrollWidth);
        });
    });

    allTabElements.forEach((tab) => {
        tab.addEventListener("click", () => {
            const sectionId = tab.getAttribute("href").substring(1);
            containerElement.querySelector(".active").classList.remove("active");
            const section = document.querySelector(`#${sectionId}`);
            section.classList.add("active");
            tab.classList.add("active");
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    const dragging = (e) => {
        if (!isDragging) return;
        containerElement.classList.add("dragging");
        containerElement.scrollLeft -= e.movementX;
        handleIcons(containerElement.scrollLeft);
    };

    const dragStop = () => {
        isDragging = false;
        containerElement.classList.remove("dragging");
    };

    containerElement.addEventListener("mousedown", () => (isDragging = true));
    containerElement.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
//

    const tabs = document.querySelectorAll('.tabs-box li.tab');
    const sections = document.querySelectorAll('.main section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            targetSection.classList.add('active');
        });
    //
        const sections = document.querySelectorAll('.main .section');
        sections.forEach(section => {
        const ostButton = section.querySelector('.ost-btn');
        const westButton = section.querySelector('.west-btn');
        const ostImages = section.querySelectorAll('.ost');
        const westImages = section.querySelectorAll('.west');
        ostButton.addEventListener('click', function() {
            ostButton.classList.add('active');
            westButton.classList.remove('active');
            ostImages.forEach(img => img.style.display = 'block');
            westImages.forEach(img => img.style.display = 'none');
        });
        westButton.addEventListener('click', function() {
            westButton.classList.add('active');
            ostButton.classList.remove('active');
            westImages.forEach(img => img.style.display = 'block');
            ostImages.forEach(img => img.style.display = 'none');
        });
    });
    });
});
//

