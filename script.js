// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.querySelector(".nav-menu")
const navButtons = document.querySelector(".nav-buttons")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-active")
  navButtons.classList.toggle("mobile-active")
  mobileMenuBtn.classList.toggle("active")
})

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")
  const toggle = item.querySelector(".faq-toggle")

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    // Close all other FAQ items
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active")
      otherItem.querySelector(".faq-toggle").textContent = "+"
    })

    // Toggle current item
    if (!isActive) {
      item.classList.add("active")
      toggle.textContent = "−"
    }
  })
})

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#ffffff"
    header.style.backdropFilter = "none"
  }
})

// Card hover animations
const cards = document.querySelectorAll(".resource-card, .security-feature, .product-card")

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector(".newsletter-input").value
    if (email) {
      alert("Thank you for subscribing!")
      newsletterForm.querySelector(".newsletter-input").value = ""
    }
  })
}

// Search functionality
const searchInput = document.querySelector(".search-input")
if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value.trim()
      if (searchTerm) {
        // Here you would typically send the search to your backend
        console.log("Searching for:", searchTerm)
        alert(`Searching for: ${searchTerm}`)
      }
    }
  })
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections for scroll animations
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})
