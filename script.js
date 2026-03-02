// ===================================
// Sample Products Data
// ===================================

const products = [
    {
        id: 1,
        name: 'Picasso Jasper with White Shell',
        category: 'Single Crystal',
        price: 24.99,
        // description: 'Vibrant colorful beaded bracelet',
        badge: 'Popular',
        image: 'Bracelets/1.jpg'
    },
    {
        id: 2,
        name: 'Strawberry Quartz with Flourite',
        category: 'Mixed Crystals',
        price: 34.99,
        // description: 'Elegant rose gold chain bracelet',
        badge: 'New',
        image: 'Bracelets/2.jpg'
    },
    {
        id: 3,
        name: 'Coffee Agate with Brown Shell v.1',
        category: 'Mixed Crystals',
        price: 29.99,
        // description: 'Premium brown leather bracelet',
        badge: null,
        image: 'Bracelets/3.jpg'
    },
    {
        id: 4,
        name: 'Coffee Agate with Brown Shell v.2',
        category: 'Mixed Crystals',
        price: 19.99,
        // description: 'Simple gold minimalist design',
        badge: null,
        image: 'Bracelets/4.jpg'
    },
    {
        id: 5,
        name: 'Amethyst',
        category: ['Single Crystal', 'Minimalist'],
        price: 24.99,
        // description: 'Vibrant colorful beaded bracelet',
        badge: 'Popular',
        image: 'Bracelets/5.jpg'
    },
    {
        id: 6,
        name: 'Chakra Bracelet',
        category: 'Mixed Crystals',
        price: 34.99,
        // description: 'Elegant rose gold chain bracelet',
        badge: 'New',
        image: 'Bracelets/6.jpg'
    },
    {
        id: 7,
        name: 'Golden Obsidian',
        category: ['Single Crystal', 'Minimalist'],
        price: 29.99,
        // description: 'Premium golden obsidian bracelet with Obsidian Pixiu Charm',
        badge: null,
        image: 'Bracelets/7.jpg'
    },
    {
        id: 8,
        name: 'Green Agate with Flourite',
        category: ['Mixed Crystals', 'Minimalist'],
        price: 19.99,
        // description: 'Simple green agate with flourite design',
        badge: null,
        image: 'Bracelets/8.jpg'
    },
    {
        id: 9,
        name: 'Jade Bracelet',
        category: ['Single Crystal', 'Minimalist'],
        price: 24.99,
        // description: 'Vibrant colorful beaded bracelet',
        badge: 'Popular',
        image: 'Bracelets/9.jpg'
    },
    {
        id: 10,
        name: 'Rose Quartz with Green Aventurine',
        category: 'Mixed Crystals',
        price: 34.99,
        // description: 'Elegant rose gold chain bracelet',
        badge: 'New',
        image: 'Bracelets/10.jpg'
    },
    {
        id: 11,
        name: 'Green Aventurine with Rose Quartz',
        category: 'Mixed Crystals',
        price: 29.99,
        // description: 'Premium brown leather bracelet',
        badge: null,
        image: 'Bracelets/11.jpg'
    },
    {
        id: 12,
        name: 'Yellow Calcite',
        category: ['Single Crystal', 'Minimalist'],
        price: 19.99,
        // description: 'Simple yellow calcite bracelet',
        badge: null,
        image: 'Bracelets/12.jpg'
    },
    {
        id: 13,
        name: 'Red Jasper with White Shell',
        category: 'Single Crystal',
        price: 24.99,
        // description: 'Vibrant colorful beaded bracelet',
        badge: 'Popular',
        image: 'Bracelets/13.jpg'
    },
    {
        id: 14,
        name: 'Rhodonite',
        category: ['Single Crystal', 'Minimalist'],
        price: 34.99,
        // description: 'Elegant rose gold chain bracelet',
        badge: 'New',
        image: 'Bracelets/14.jpg'
    },
    {
        id: 15,
        name: 'Crazy Lace Agate',
        category: ['Single Crystal', 'Minimalist'],
        price: 29.99,
        // description: 'Premium brown leather bracelet',
        badge: null,
        image: 'Bracelets/15.jpg'
    },
    {
        id: 16,
        name: 'Picasso Jasper',
        category: ['Single Crystal', 'Minimalist'],
        price: 19.99,
        // description: 'Simple gold minimalist design',
        badge: null,
        image: 'Bracelets/16.jpg'
    }
];

// ===================================
// Cart Management
// ===================================

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartToggle = document.getElementById('cartToggle');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const contactForm = document.getElementById('contactForm');

// Toggle cart visibility
cartToggle.addEventListener('click', () => {
    cartModal.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Close cart when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

// ===================================
// Update Cart Display
// ===================================

function updateCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartCount.textContent = '0';
        totalPrice.textContent = '$0.00';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>

                <div class="cart-item-quantity">
                    <button class="qty-btn qty-decrease" data-index="${index}">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn qty-increase" data-index="${index}">+</button>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    attachCartEvents();
    updateCartSummary();
}
function attachCartEvents() {
    document.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
            saveCart();
            updateCart();
        });
    });

    document.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart[index].quantity++;
            saveCart();
            updateCart();
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            saveCart();
            updateCart();
        });
    });
}

function updateCartSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ===================================
// Add to Cart Function
// ===================================

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
    cartModal.classList.add('active');
}

// ===================================
// Render Products
// ===================================

function renderProducts(productsToShow = products, sortBy = 'popular') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    let sorted = [...productsToShow];

    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }

    sorted.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">
                    ${Array.isArray(product.category) 
                        ? product.category.join(', ') 
                        : product.category}
                </div>
                <h3 class="product-name">${product.name}</h3>
                
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        productCard.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            addToCart(product);
        });

        productsGrid.appendChild(productCard);
    });
}

// ===================================
// Filter and Sort
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');

let currentFilter = 'all';

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        applyFiltersAndSort();
    });
});

sortSelect.addEventListener('change', () => {
    applyFiltersAndSort();
});

function applyFiltersAndSort() {
    let filtered = products;

    if (currentFilter !== 'all') {
        filtered = products.filter(p => 
            p.category.includes(currentFilter)
        );
    }

    renderProducts(filtered, sortSelect.value);
}

// ===================================
// Mobile Menu Toggle
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Header Scroll Effect
// ===================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// Smooth Scroll for Navigation
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards on load
renderProducts();
updateCart();

const productsGrid = document.getElementById('productsGrid');
productsGrid.addEventListener('DOMNodeInserted', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        if (card.style.opacity === '') {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        }
    });
});

const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Contact Form Submission
// ===================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.textContent = 'Message Sent!';
        submitButton.style.backgroundColor = '#ec4899';

        contactForm.reset();

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '';
        }, 3000);
    }, 1500);
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
            } else {
                navLink.style.color = '';
            }
        }
    });
});
