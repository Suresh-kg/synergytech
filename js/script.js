/* =====================================
FAQ ACCORDION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

```
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector("button");

    const answer = item.querySelector(".faq-answer");

    if (!answer) return;

    answer.style.maxHeight = "0px";

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            const content = faq.querySelector(".faq-answer");

            if (content) {
                content.style.maxHeight = "0px";
            }

        });

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});
```

});

/* =====================================
NAVBAR SHADOW ON SCROLL
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 50) {

    navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";

} else {

    navbar.style.boxShadow = "none";

}
```

});

/* =====================================
SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
".card, .timeline-item, .course-card, .faq-item"
);

const revealObserver = new IntersectionObserver(

```
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}
```

);

revealElements.forEach(el => {

```
el.classList.add("hidden");

revealObserver.observe(el);
```

});

/* =====================================
BUTTON RIPPLE EFFECT
===================================== */

const buttons = document.querySelectorAll(
".btn-primary, .btn-secondary"
);

buttons.forEach(button => {

```
button.addEventListener("click", function (e) {

    const ripple =
        document.createElement("span");

    const rect =
        this.getBoundingClientRect();

    const size =
        Math.max(rect.width, rect.height);

    ripple.style.width =
        ripple.style.height =
        size + "px";

    ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";

    ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 600);

});
```

});
