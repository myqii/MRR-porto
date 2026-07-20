  // ==========================================
        // DATA OBJECTS & DATABASES
        // ==========================================
        const skillData = [
            { name: "HTML5 & CSS3", level: 100, icon: "fa-brands fa-html5 text-orange-500" },
            // { name: "JavaScript ES6+", level: 85, icon: "fa-brands fa-js text-yellow-400" },
            // { name: "React 19 & Next.js", level: 80, icon: "fa-brands fa-react text-cyan-400" },
            // { name: "Tailwind CSS", level: 90, icon: "fa-solid fa-wind text-teal-400" },
            { name: "Bootstrap ", level: 90, icon: "fa-brands fa-bootstrap text-purple-500" },
            // { name: "Node.js & Express", level: 75, icon: "fa-brands fa-node-js text-emerald-500" },
            { name: "PHP", level: 50, icon: "fa-brands fa-php text-indigo-400" },
            { name: "Laravel 10", level: 50, icon: "fa-brands fa-laravel text-red-500" },
            // { name: "MySQL & Relational SQL", level: 82, icon: "fa-solid fa-database text-blue-400" },
            // { name: "VS Code ", level: 95, icon: "fa-solid fa-laptop-code text-cyan-500" },
            { name: "Git & GitHub", level: 85, icon: "fa-brands fa-github text-slate-300" },
            { name: "Figma ", level: 100, icon: "fa-brands fa-figma text-pink-500" },
            // { name: "Postman API Testing", level: 75, icon: "fa-solid fa-network-wired text-orange-400" }
            { name: "Java ", level: 50,  icon: "fa-brands fa-java text-red-500" },
            { name: "Python ",  level: 50,  icon: "fa-brands fa-python text-yellow-400" },
        ];

        // Separation of thumbnail (strictly for card previews) and images array (strictly for modal slider)
        const projectData = [
            {
                title: "Portfolio Website",
                category: "Frontend",
                desc: "Website portofolio pribadi premium interaktif dengan animasi ambient glow serta modern glassmorphism.",
                longDesc: "Sistem portofolio pribadi modern berbasis web yang dirancang khusus untuk memamerkan keahlian developer dalam format visual mewah. Menggunakan arsitektur modular Vanilla HTML, CSS, dan JS dengan ornamen mikro animasi transisi yang sangat mulus, responsif terhadap sentuhan, serta ambient glow dinamis yang mengikuti arah kursor pengguna.",
                features: [
                    "Responsive Fluid Grid Layout & Kustomisasi Grid CSS",
                    "Ambient Mouse Glow & Custom Cursor Dynamic Positioning",
                    "Interactive 3D Card Tilt Effects (Sistem Koordinat Vektor)",
                    "Evolvion Morphing Navigation Capsule Scheme"
                ],
                tags: ["HTML5", "CSS", "Javascript"],
                thumbnail: "img/frontend/tumpor.png",
                images: [
                    "img/frontend/tumpor.png",
                    // "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
                    // "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200"
                ],
                // github: "https://github.com/mrizqihr/portfolio-2026",
                live: "https://portfolio.rizqih.demo"
            },
                        {
                title: "Prediksi Error & Manhattan Distance Calculator",
                category: "Frontend",
                desc: "Prediksi Error & Manhattan Distance Calculator adalah aplikasi web interaktif yang dikembangkan untuk membantu pengguna memahami konsep matematika, khususnya Absolute Error dan Manhattan Distance.",
                longDesc: "Aplikasi ini mampu menghitung hasil secara otomatis, menampilkan langkah-langkah penyelesaian, serta memberikan visualisasi grafik dan koordinat secara real-time. Selain itu, tersedia fitur History yang memungkinkan pengguna menyimpan, mengedit, dan menghapus riwayat perhitungan. Dibangun dengan fokus pada pengalaman pengguna melalui antarmuka yang modern, responsif, dan mudah digunakan.",
                features: [
                    "Responsive Fluid Grid Layout & Kustomisasi Grid CSS",
                    "Ambient Mouse Glow & Custom Cursor Dynamic Positioning",
                    "Interactive 3D Card Tilt Effects (Sistem Koordinat Vektor)",
                    "Evolvion Morphing Navigation Capsule Scheme"
                ],
                tags: ["HTML5", "CSS", "Javascript"],
                thumbnail: "img/frontend/tumkal.png",
                images: [
                    "img/frontend/tumkal.png",
                    "img/frontend/fronkal1.png",
                    "img/frontend/fronkal2.png",

                ],
                github: "https://myqii.github.io/kalkulus/",
                live: "https://myqii.github.io/kalkulus/"
            },
            {
                title: "MOCKUP FASHION",
                category: "UI/UX",
                desc: "Situs web Limshion menampilkan desain yang bersih, modern, dan elegan bagi merek fesyen yang ingin tampil lebih profesional.Situs ini mengutamakan visual produk, warna-warna lembut, dan tata letak yang memanjakan mata.",
                longDesc: " Ini adalah pilihan tepat bagi merek yang ingin membangun identitas yang kuat serta meningkatkan pengalaman belanja daring..",
                features: [
                    "User Flow & Interactive High-Fidelity Prototyping Terstruktur",
                    "Aksesibilitas Kontras Warna Sesuai Standar Global WCAG 2.1",
                    "Penerapan Konsep Atomic Design System Terstandarisasi",
                    "Custom Micro-Interactions untuk Transmisi Saldo Lebih Menyenangkan"
                ],
                tags: ["Figma", "UI/UX Design"],
                thumbnail: "img/porto/tumfash.png",
                images: [
                    "img/porto/porfash.png",
                    // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
                    // "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200"
                ],
                github: "#",
                live: "https://www.figma.com/proto/A6tqR229GUWEmbdX8h3lxL/Untitled?node-id=107-1280&p=f&viewport=-1198%2C241%2C0.1&t=KZ32glZuJLhjUrb7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
            // {
            //     title: "Perpustakaan Java Desktop",
            //     category: "Backend",
            //     desc: "Aplikasi desktop GUI manajemen perpustakaan berbasis Java Swing dan database MySQL relasional.",
            //     longDesc: "Sistem informasi internal berskala menengah untuk melacak inventori perpustakaan fisik secara komprehensif. Aplikasi client desktop ini menyajikan pengalaman operasi data (CRUD) yang cepat, relasi tabel transaksional yang aman, enkripsi sederhana, dan visualisasi grafik statistik peminjaman buku harian.",
            //     features: [
            //         "Sistem CRUD Data Buku & Anggota Terintegrasi Relasional",
            //         "Visualisasi Grafik Statistik Peminjaman Buku Terintegrasi",
            //         "Optimasi Query MySQL untuk Pencarian Multi-Filter",
            //         "Sistem Otentikasi Pengguna & Pembagian Akses Staf Admin"
            //     ],
            //     tags: ["Java SE", "Swing UI", "JDBC Connector", "MySQL"],
            //     thumbnail: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
            //     images: [
            //         "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
            //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
            //     ],
            //     github: "https://github.com/mrizqihr/java-library-gui",
            //     live: "https://github.com/mrizqihr/java-library-gui"
            // },
            // {
            //     title: "NEXWEB Company Profile",
            //     category: "Frontend",
            //     desc: "Landing page profil korporasi modern dengan smooth parallax scrolling dan tata visual premium.",
            //     longDesc: "Sebuah landing page modern yang ditujukan untuk meningkatkan nilai branding digital dan konversi korporat. Menggunakan teknik optimasi gambar canggih, perancangan tata letak modular dengan CSS Flexbox/Grid, efek transisi parallax yang halus, serta integrasi formulir kontak interaktif.",
            //     features: [
            //         "Sistem Layout Fluid Grid Adaptif untuk Semua Resolusi Layar",
            //         "Efek Transisi Parallax Scroll & CSS Keyframes Terintegrasi",
            //         "Interaksi Komponen UI/UX Premium Bernuansa Glassmorphism",
            //         "Arsitektur SEO Friendly & Semantic HTML5 Terbaik"
            //     ],
            //     tags: ["HTML", "Tailwind CSS", "AOS Library"],
            //     thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
            //     images: [
            //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
            //         "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1200",
            //         "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
            //     ],
            //     github: "https://github.com/mrizqihr/nexweb-profile",
            //     live: "https://nexweb-profile.demo"
            // },
            {
                title: "MOCKUP OUTDOR",
                category: "UI/UX",
                desc: "Situs web Santure ini dirancang dengan tampilan modern, navigasi yang mudah, dan fokus pada pengalaman pengguna—sehingga para pencinta alam dapat menemukan perlengkapan terbaik dengan cepat dan praktis.",
                // longDesc: "Sistem desain (Design System) komprehensif yang dirancang khusus untuk platform analitik SaaS tingkat lanjut. Sistem ini menjaga keselarasan penuh antara desainer dan tim developer melalui token desain teratur, skema warna aksesibel, serta tata letak widget dashboard yang modular.",
                features: [
                    "Atomic Design System Komponen Pustaka Siap Pakai",
                    "Penyusunan Sistem Grid Layout Responsif Desktop & Tablet",
                    "Gaya Desain Dark & Light Mode Token Tersinkronisasi",
                    "Interactive Dashboard Widget Usability Testing Certified"
                ],
                tags: ["Figma", "UI/UX Design", ],
                thumbnail: "img/porto/tumout1.png",
                images: [
                    "img/porto/porout.png",
                    // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
                    // "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
                ],
                github: "#",
                live: "https://www.figma.com/proto/A6tqR229GUWEmbdX8h3lxL/Untitled?node-id=107-599&p=f&viewport=-1198%2C241%2C0.1&t=KZ32glZuJLhjUrb7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
                        {
                title: "MOCKUP SHOWROOM",
                category: "UI/UX",
                desc: "website car marketplace dirancang sebagai platform jual beli mobil dengan fitur lengkap seperti pencarian berdasarkan merek dan tipe, listing kendaraan, hingga layanan tambahan seperti tukar tambah dan pembiayaan.",
                longDesc: "Desainnya informatif dan profesional, memudahkan pengguna dalam menemukan dan melakukan transaksi mobil dengan cepat dan terpercaya.",
                features: [
                    "Atomic Design System Komponen Pustaka Siap Pakai",
                    "Penyusunan Sistem Grid Layout Responsif Desktop & Tablet",
                    "Gaya Desain Dark & Light Mode Token Tersinkronisasi",
                    "Interactive Dashboard Widget Usability Testing Certified"
                ],
                tags: ["Figma", "UI/UX Design", ],
                thumbnail: "img/porto/tumcar.png",
                images: [
                    "img/porto/porcar.png",
                    // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
                    // "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
                ],
                github: "#",
                live: "https://www.figma.com/proto/A6tqR229GUWEmbdX8h3lxL/Untitled?node-id=107-1499&p=f&viewport=-1198%2C241%2C0.1&t=KZ32glZuJLhjUrb7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
                        {
                title: "MOCKUP FOOD",
                category: "UI/UX",
                desc: "Website food ini menampilkan desain modern dengan tema elegan yang fokus pada visual makanan dan kenyamanan pengguna.",
                longDesc: "Terdapat fitur seperti menu produk, informasi cabang restoran, serta tampilan yang menarik untuk meningkatkan minat pengunjung dalam menjelajahi dan memesan makanan.",
                features: [
                    "Atomic Design System Komponen Pustaka Siap Pakai",
                    "Penyusunan Sistem Grid Layout Responsif Desktop & Tablet",
                    "Gaya Desain Dark & Light Mode Token Tersinkronisasi",
                    "Interactive Dashboard Widget Usability Testing Certified"
                ],
                tags: ["Figma", "UI/UX Design", ],
                thumbnail: "img/porto/tumfood.png",
                images: [
                    "img/porto/porfood.png",
                    // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
                    // "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
                ],
                github: "#",
                live: "https://www.figma.com/proto/A6tqR229GUWEmbdX8h3lxL/Untitled?node-id=107-376&p=f&viewport=-1198%2C241%2C0.1&t=KZ32glZuJLhjUrb7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
                        {
                title: "MOCKUP GALERI",
                category: "UI/UX",
                desc: "Mockup pertama (Home) menampilkan halaman utama website galeri foto dengan tampilan modern dan elegan. Bagian hero menampilkan gambar background pegunungan dengan kolom pencarian besar untuk mencari foto, diikuti section “Popular Tours” dan kumpulan foto HD yang tersusun rapi dalam grid. Desain ini fokus pada eksplorasi visual, sehingga pengguna dapat dengan mudah menemukan inspirasi gambar berdasarkan kategori.",
                longDesc: "Mockup berikutnya menunjukkan halaman detail gambar dan hasil pencarian. Pada halaman detail, ditampilkan foto utama beserta informasi seperti judul, deskripsi, dan interaksi pengguna. Sedangkan pada bagian pencarian, hasil foto ditampilkan dalam bentuk grid berdasarkan kata kunci yang dicari, memudahkan pengguna menemukan gambar yang relevan secara cepat dan efisien.",
                features: [
                    "Atomic Design System Komponen Pustaka Siap Pakai",
                    "Penyusunan Sistem Grid Layout Responsif Desktop & Tablet",
                    "Gaya Desain Dark & Light Mode Token Tersinkronisasi",
                    "Interactive Dashboard Widget Usability Testing Certified"
                ],
                tags: ["Figma", "UI/UX Design", ],
                thumbnail: "img/porto/tumgal.png",
                images: [
                    "img/porto/porgal1.png",
                    "img/porto/porgal2.png",
                    "img/porto/porgal3.png"
                ],
                github: "#",
                live: "https://www.figma.com"
            },

            // {
            //     title: "Laravel CRUD Admin",
            //     category: "Backend",
            //     desc: "Sistem pergudangan logistik dengan otentikasi role, API gateway, dan pengoptimalan database.",
            //     longDesc: "Sistem manajemen pergudangan backend berbasis Laravel yang kuat untuk pemantauan alur keluar-masuk stok logistik berskala bisnis. Menyediakan perlindungan Route Middleware, arsitektur RESTful API, log aktivitas audit admin, integrasi relasi database Eloquent ORM, serta pengiriman email otomatis.",
            //     features: [
            //         "Sistem Multi-Role Authentication (Admin & Staff Logistik)",
            //         "Eloquent ORM Database Relations & Indexing Optimal",
            //         "Ekspor Laporan Otomatis (Format Excel & PDF Komparatif)",
            //         "RESTful API Endpoint Siap Pakai & Aman"
            //     ],
            //     tags: ["Laravel 10", "Bootstrap 5", "Eloquent ORM", "MySQL"],
            //     thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
            //     images: [
            //         "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
            //         "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200"
            //     ],
            //     github: "https://github.com/mrizqihr/laravel-crud-admin",
            //     live: "https://laravel-warehouse.demo"
            // },
            // {
            //     title: "Dashboard Keuangan",
            //     category: "Frontend",
            //     desc: "Dashboard monitoring finansial komprehensif, terintegrasi chart modular interaktif.",
            //     longDesc: "Antarmuka dashboard analitik untuk menyederhanakan data keuangan rumit menjadi grafik visual interaktif. Dikembangkan dengan memprioritaskan performa rendering data, penyaringan tanggal taktis, komparasi visual, serta kalkulator estimasi rencana anggaran pengeluaran bisnis harian.",
            //     features: [
            //         "Visualisasi Grafik Tren Keuangan Interaktif (Chart.js)",
            //         "Modul Kalkulator Rencana Alokasi Anggaran Real-time",
            //         "Sistem Responsif Berkecepatan Tinggi & Ringan",
            //         "Ekspor Ringkasan Laporan Finansial ke Format CSV"
            //     ],
            //     tags: ["Vanilla JS", "Chart.js", "Tailwind CSS"],
            //     thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            //     images: [
            //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            //         "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200"
            //     ],
            //     github: "https://github.com/mrizqihr/finance-dashboard",
            //     live: "https://finance-dashboard.demo"
            // },
            {
                title: "Introduction to HTML",
                category: "Certificates",
                desc: "Sertifikat Introduction to HTML menunjukkan pemahaman dasar tentang HTML untuk membuat struktur halaman web, seperti penggunaan tag, teks, gambar, link, dan elemen dasar lainnya.",
                longDesc: "Sertifikat Introduction to HTML menunjukkan pemahaman dasar tentang HTML untuk membuat struktur halaman web, seperti penggunaan tag, teks, gambar, link, dan elemen dasar lainnya",
                tags: ["SOLOLEARN", "2024", ""],
                thumbnail: "img/serti/serhtml.jpg",
                images: [
                    "img/serti/serhtml.jpg"
                ],
                org: "SOLOLEARN",
                year: "2024",
                github: "#",
                live: "#"
            },
            {
                title: "PT. Delta Digital Technology",
                category: "Certificates",
                desc: "Sertifikat magang dari PT. Delta Digital Teknologi yang menunjukkan pengalaman mengikuti program magang serta memperoleh pengetahuan dan keterampilan dasar di bidang teknologi/digital.",
                longDesc: "Sertifikat magang dari PT. Delta Digital Teknologi yang menunjukkan pengalaman mengikuti program magang serta memperoleh pengetahuan dan keterampilan dasar di bidang teknologi/digital.",
                tags: ["PT. Delta Digital Technology", "2024", "Intern"],
                thumbnail: "img/serti/sertifdel.jpg",
                images: [
                    "img/serti/sertifdel.jpg"
                ],
                org: "PT. Delta Digital Technology",
                year: "2024",
                github: "#",
                live: "#"
            },
            {
                title: "DATABASES",
                category: "Certificates",
                desc: "Sertifikat Databases yang menunjukkan pemahaman dasar tentang pengelolaan basis data, termasuk penyimpanan, pengolahan, dan pengorganisasian data menggunakan sistem database.",
                longDesc: "Sertifikat Databases yang menunjukkan pemahaman dasar tentang pengelolaan basis data, termasuk penyimpanan, pengolahan, dan pengorganisasian data menggunakan sistem database.",
                tags: ["Information Technology Specialist", "2024", "Database"],
                thumbnail: "img/serti/serdat.jpg",
                images: [
                    "img/serti/serdat.jpg"
                ],
                org: "Information Technology Specialist",
                year: "2024",
                github: "#",
                live: "#"
            },
                        {
                title: "PUSAT PENDIDIKAN WEBINAR DAC",
                category: "Certificates",
                desc: "Sertifikat dari Pusat Pendidikan Webinar DAC yang menunjukkan partisipasi dan pemahaman dalam kegiatan pembelajaran atau pelatihan yang diselenggarakan secara online.",
                longDesc: "Sertifikat dari Pusat Pendidikan Webinar DAC yang menunjukkan partisipasi dan pemahaman dalam kegiatan pembelajaran atau pelatihan yang diselenggarakan secara online.",
                tags: ["DAC", "2024", "figma ui"],
                thumbnail: "img/serti/serdac.jpg",
                images: [
                    "img/serti/serdac.jpg"
                ],
                org: "DAC",
                year: "2024",
                github: "#",
                live: "#"
            },
                        {
                title: "ENTREPRENEUR",
                category: "Certificates",
                desc: "Sertifikat Entrepreneur yang menunjukkan pemahaman dasar tentang kewirausahaan, termasuk cara memulai usaha, mengelola bisnis, dan mengembangkan ide bisnis.",
                longDesc: "Sertifikat Entrepreneur yang menunjukkan pemahaman dasar tentang kewirausahaan, termasuk cara memulai usaha, mengelola bisnis, dan mengembangkan ide bisnis.",
                tags: ["Bina Sarana Informatika", "2024", "Seminar"],
                thumbnail: "img/serti/serent.jpg",
                images: [
                    "img/serti/serent.jpg"
                ],
                org: "Bina Sarana Informatika",
                year: "2024",
                github: "#",
                live: "#"
            }
        ];

        // Active Project Multi-Image State Variables for Modal Carousel
        let activeProjectImages = [];
        let activeImageIndex = 0;

        // ==========================================
        // INITIALIZATIONS
        // ==========================================
        window.onload = function() {
            simulateAppLoading();
            renderSkills();
            renderProjects('All');
            initializeScrollReveal();
            setupMouseInteractions();
            setupTiltCards();
            initializeEvolvionNavbar();
        };

        // Loading Screen simulation logic
        function simulateAppLoading() {
            const loader = document.getElementById('loading-screen');
            const percentLabel = document.getElementById('load-percentage');
            const progressBar = document.getElementById('load-progress-bar');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 15) + 5;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    // Trigger fading animation
                    setTimeout(() => {
                        loader.classList.add('opacity-0', 'pointer-events-none');
                        // Start Typing Animation loop inside Hero
                        startTypingAnimation();
                    }, 500);
                }
                percentLabel.innerText = progress + "%";
                progressBar.style.width = progress + "%";
            }, 80);
        }

        // ==========================================
        // HERO TYPING LOOP ANIMATION
        // ==========================================
        const roles = ["Frontend Developer", "UI Designer", "Web Developer"];
        let roleIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const waitBeforeDelete = 2000;

        function startTypingAnimation() {
            const container = document.getElementById('typed-role');
            if(!container) return;
            const currentFullText = roles[roleIdx];

            if (!isDeleting) {
                container.innerText = currentFullText.substring(0, charIdx + 1);
                charIdx++;

                if (charIdx === currentFullText.length) {
                    isDeleting = true;
                    setTimeout(startTypingAnimation, waitBeforeDelete);
                } else {
                    setTimeout(startTypingAnimation, typingSpeed);
                }
            } else {
                container.innerText = currentFullText.substring(0, charIdx - 1);
                charIdx--;

                if (charIdx === 0) {
                    isDeleting = false;
                    roleIdx = (roleIdx + 1) % roles.length;
                    setTimeout(startTypingAnimation, 500); // short wait before typing next
                } else {
                    setTimeout(startTypingAnimation, deletingSpeed);
                }
            }
        }

        // ==========================================
        // EVOLVION NAVBAR INTERACTIVITY
        // ==========================================
        function initializeEvolvionNavbar() {
            const nav = document.getElementById('main-nav');
            const navMenu = document.getElementById('nav-menu');
            const hoverIndicator = document.getElementById('hover-indicator');
            const navItems = document.querySelectorAll('.nav-item');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-menu-link');

            // 1. Animasi Berubah Bentuk Saat Scroll
            function handleScroll() {
                if (window.scrollY > 60) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }

                // Update Horizontal top progress bar
                const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolledVal = (winScroll / height) * 100;
                document.getElementById("scroll-progress").style.width = scrolledVal + "%";

                // Back to top floating indicator visibility
                const backToTopBtn = document.getElementById('back-to-top');
                if (window.scrollY > 400) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                    backToTopBtn.classList.add('opacity-100');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                    backToTopBtn.classList.remove('opacity-100');
                }

                // Scroll Spy
                spyScroll();
            }

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Jalankan sekali saat buka halaman

            // 2. Indikator Geser Saat Hover Menu
            navItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    const rect = item.getBoundingClientRect();
                    const menuRect = navMenu.getBoundingClientRect();
                    const menuPadding = 4; // Padding offset alignment

                    hoverIndicator.style.left = `${rect.left - menuRect.left - menuPadding}px`;
                    hoverIndicator.style.width = `${rect.width + (menuPadding * 2)}px`;
                    hoverIndicator.style.height = `${rect.height}px`;
                    hoverIndicator.style.opacity = '1';
                });
            });

            navMenu.addEventListener('mouseleave', () => {
                hoverIndicator.style.opacity = '0';
            });

            // 3. Toggle Menu Mobile
            mobileBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('pointer-events-none');
                if (isHidden) {
                    mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                    mobileBtn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
                    document.body.classList.add('overflow-hidden');
                } else {
                    mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                    mobileBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                    document.body.classList.remove('overflow-hidden');
                }
                lucide.createIcons();
            });

            // Close mobile menu on clicking any link
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                    mobileBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                    document.body.classList.remove('overflow-hidden');
                    lucide.createIcons();
                });
            });

            // Scroll Spying for menu highlights (Updated: Experience section removed)
            function spyScroll() {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                const scrollPos = window.scrollY + 180;

                sections.forEach(secId => {
                    const el = document.getElementById(secId);
                    if (el) {
                        const top = el.offsetTop;
                        const height = el.offsetHeight;
                        if (scrollPos >= top && scrollPos < top + height) {
                            navItems.forEach(item => {
                                if (item.getAttribute('href') === `#${secId}`) {
                                    item.className = "nav-item relative z-10 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400";
                                } else {
                                    item.className = "nav-item relative z-10 px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white";
                                }
                            });
                        }
                    }
                });
            }

            // Inisialisasi Ikon Lucide
            lucide.createIcons();
        }

        // ==========================================
        // DYNAMIC CONTENT RENDERING (SKILLS & PROJECTS)
        // ==========================================
        function renderSkills() {
            const grid = document.getElementById('skills-grid');
            if(!grid) return;
            grid.innerHTML = ""; // Clear existing grid items

            skillData.forEach((skill) => {
                const card = document.createElement('div');
                card.className = "p-6 rounded-2xl glass-card border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between h-[150px] tilt-card";
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="space-y-1">
                            <h4 class="text-sm font-bold text-white tracking-wider uppercase font-heading">${skill.name}</h4>
                            <p class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">ESTIMATED ABILITY</p>
                        </div>
                        <div class="p-2.5 rounded-lg bg-white/5 border border-white/5 shrink-0 flex items-center justify-center w-10 h-10">
                            <i class="${skill.icon} text-lg"></i>
                        </div>
                    </div>
                    <div class="space-y-1.5">
                        <div class="flex justify-between items-center text-[10px] font-mono">
                            <span class="text-slate-500">EXPERTISE LEVEL</span>
                            <span class="text-cyan-400 font-bold">${skill.level}%</span>
                        </div>
                        <div class="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                            <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-400" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
            // Re-bind tilt events for newly injected cards
            setupTiltCards();
        }

        function renderProjects(filter) {
            const grid = document.getElementById('projects-grid');
            if(!grid) return;
            grid.innerHTML = "";

            const list = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

            list.forEach((proj) => {
                const item = document.createElement('div');
                item.className = "h-full";
                
                // Track original index mapping for proper detail triggering
                const originalIndex = projectData.indexOf(proj);
                
                // Kondisional rendering tombol aksi jika project berkategori Certificates atau UI/UX
                let actionButtonsHtml = "";
                if (proj.category === "Certificates") {
                    actionButtonsHtml = `
                        <button onclick="openCertificateLightbox('${proj.title}', '${proj.org}', '${proj.images[0]}', '${proj.year}')" class="w-full py-2.5 text-center text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white transition-all inline-flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10">
                            Preview Certificate <i class="fa-solid fa-expand text-xs"></i>
                        </button>
                    `;
                } else if (proj.category === "UI/UX") {
                    actionButtonsHtml = `
                        <a href="${proj.live}" target="_blank" class="flex-1 py-2.5 text-center text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all inline-flex items-center justify-center gap-1.5">
                            <i class="fa-brands fa-figma text-sm"></i> Figma
                        </a>
                        <button onclick="openProjectDetail(${originalIndex})" class="flex-1 py-2.5 text-center text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white transition-all inline-flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10">
                            Details <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </button>
                    `;
                } else {
                    actionButtonsHtml = `
                        <a href="${proj.github}" target="_blank" class="flex-1 py-2.5 text-center text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all inline-flex items-center justify-center gap-1.5">
                            <i class="fa-brands fa-github text-sm"></i> Code
                        </a>
                        <button onclick="openProjectDetail(${originalIndex})" class="flex-1 py-2.5 text-center text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white transition-all inline-flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/10">
                            Demo <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </button>
                    `;
                }

                // Display the cover thumbnail specified in the thumbnail property
                const cardThumbnail = proj.thumbnail || "https://placehold.co/600x400";

                item.innerHTML = `
                    <div class="tilt-card glass-card rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                        <div>
                            <div class="relative w-full h-[180px] overflow-hidden bg-slate-900 group">
                                <img src="${cardThumbnail}" alt="${proj.title}" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent opacity-85"></div>
                            </div>
                            <div class="p-6 text-left space-y-3">
                                <span class="text-[9px] font-mono font-bold text-cyan-400 tracking-wider uppercase block">
                                    ${proj.category}
                                </span>
                                <h4 class="text-lg font-bold text-white uppercase tracking-wider font-heading">${proj.title}</h4>
                                <p class="text-xs text-slate-400 leading-relaxed">${proj.desc}</p>
                            </div>
                        </div>
                        <div class="p-6 pt-0 space-y-5 text-left">
                            <div class="flex flex-wrap gap-1.5">
                                ${proj.tags.map(tag => `<span class="px-2 py-0.5 text-[8px] font-mono font-semibold bg-white/5 border border-white/5 text-slate-300 rounded uppercase">${tag}</span>`).join('')}
                            </div>
                            <div class="h-px bg-white/5"></div>
                            <div class="flex gap-2.5">
                                ${actionButtonsHtml}
                            </div>
                        </div>
                    </div>
                `;
                grid.appendChild(item);
            });
            setupTiltCards();
        }

        function filterProjects(filterVal) {
            const tabs = document.querySelectorAll('.project-tab-btn');
            tabs.forEach(tab => {
                if (tab.getAttribute('data-filter') === filterVal) {
                    tab.className = "project-tab-btn px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-600 text-white border-transparent shadow-lg shadow-blue-500/15";
                } else {
                    tab.className = "project-tab-btn px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5";
                }
            });
            renderProjects(filterVal);
        }

        // ==========================================
        // DYNAMIC PROJECT DETAIL MODAL SHOWCASE CAROUSEL
        // ==========================================
        function openProjectDetail(index) {
            const proj = projectData[index];
            if (!proj) return;

            // Inject core texts
            document.getElementById('modal-project-title').innerText = proj.title;
            document.getElementById('modal-project-category').innerText = proj.category;
            document.getElementById('modal-project-desc').innerText = proj.desc;
            document.getElementById('modal-project-long-desc').innerText = proj.longDesc || "";
            
            // Set multi-image gallery state from project images array (NOT thumbnail)
            activeProjectImages = proj.images && proj.images.length > 0 ? proj.images : ["https://placehold.co/600x400"];
            activeImageIndex = 0;

            // Update modal slider visual
            updateModalImage();

            // Set dynamic Live Demo link
            const liveAnchor = document.getElementById('modal-project-live-anchor');
            if (proj.live && proj.live !== "#") {
                liveAnchor.href = proj.live;
                liveAnchor.style.display = "inline-flex";
            } else {
                liveAnchor.style.display = "none";
            }

            // Generate tech stack tag badges with dark premium pill styling (Sesuai screenshot 2026-07-20 032204.png)
            const tagContainer = document.getElementById('modal-project-tags');
            tagContainer.innerHTML = "";
            proj.tags.forEach(tag => {
                const badge = document.createElement('span');
                badge.className = "px-3.5 py-1 text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-200 rounded-full uppercase hover:border-cyan-500/30 transition-colors";
                badge.innerText = tag;
                tagContainer.appendChild(badge);
            });

            // Trigger modal fade & scale transition in
            const modal = document.getElementById('project-detail-modal');
            const container = document.getElementById('project-modal-container');
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            container.classList.remove('scale-95');
            container.classList.add('scale-100');
            document.body.classList.add('overflow-hidden');

            // Refresh dynamic icons inside the modal
            lucide.createIcons();
        }

        // Update Modal image and refresh slider interface indicators
        function updateModalImage() {
            const imgEl = document.getElementById('modal-project-img');
            const viewport = document.getElementById('modal-scroll-viewport');
            if (!imgEl || activeProjectImages.length === 0) return;
            
            // Premium smooth image change animation using Tailwind transitions
            imgEl.style.opacity = '0';
            
            setTimeout(() => {
                imgEl.src = activeProjectImages[activeImageIndex];
                // Reset scroll to top on every mockup slide change
                if (viewport) viewport.scrollTop = 0;
                imgEl.style.opacity = '1';
            }, 150);
            
            // Update the top simulated URL status slide tracker counter
            const counterEl = document.getElementById('modal-slide-counter');
            if (counterEl) {
                counterEl.innerText = `${activeImageIndex + 1} / ${activeProjectImages.length}`;
            }
            
            // Render indicator dots tracking system at bottom overlay
            const dotsContainer = document.getElementById('modal-gallery-dots');
            if (dotsContainer) {
                dotsContainer.innerHTML = "";
                activeProjectImages.forEach((_, idx) => {
                    const dot = document.createElement('button');
                    dot.onclick = () => setModalImageIndex(idx);
                    if (idx === activeImageIndex) {
                        dot.className = "w-5 h-2 rounded-full bg-cyan-400 transition-all duration-300 cursor-pointer";
                    } else {
                        dot.className = "w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 cursor-pointer";
                    }
                    dotsContainer.appendChild(dot);
                });
            }
        }

        function prevModalImage() {
            if (activeProjectImages.length <= 1) return;
            activeImageIndex = (activeImageIndex - 1 + activeProjectImages.length) % activeProjectImages.length;
            updateModalImage();
        }

        function nextModalImage() {
            if (activeProjectImages.length <= 1) return;
            activeImageIndex = (activeImageIndex + 1) % activeProjectImages.length;
            updateModalImage();
        }

        function setModalImageIndex(idx) {
            if (idx === activeImageIndex) return;
            activeImageIndex = idx;
            updateModalImage();
        }

        function closeProjectDetail() {
            const modal = document.getElementById('project-detail-modal');
            const container = document.getElementById('project-modal-container');

            container.classList.add('scale-95');
            container.classList.remove('scale-100');
            modal.classList.add('opacity-0', 'pointer-events-none');
            document.body.classList.remove('overflow-hidden');
        }

        // Close project detail on ESC key or clicking background mask
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProjectDetail();
                closeCertificateLightbox();
            }
        });

        document.getElementById('project-detail-modal').addEventListener('click', (e) => {
            if (e.target.id === 'project-detail-modal') {
                closeProjectDetail();
            }
        });

        // ==========================================
        // LIGHTBOX PREVIEW (FOR CERTIFICATES)
        // ==========================================
        function openCertificateLightbox(title, org, imgUrl, year) {
            document.getElementById('lightbox-title').innerText = title;
            document.getElementById('lightbox-org').innerText = org;
            document.getElementById('lightbox-image').src = imgUrl;
            document.getElementById('lightbox-year').innerText = "YEAR: " + year;

            const modal = document.getElementById('certificate-lightbox');
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }

        function closeCertificateLightbox() {
            const modal = document.getElementById('certificate-lightbox');
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }

        // ==========================================
        // SCROLL REVEAL & STATS COUNTERS
        // ==========================================
        function initializeScrollReveal() {
            const elements = document.querySelectorAll('.reveal');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        
                        // Check if it's the about section and trigger counters
                        if (entry.target.id === 'about') {
                            triggerStatsCounters();
                        }
                    }
                });
            }, {
                threshold: 0.15
            });

            elements.forEach(el => observer.observe(el));
        }

        function triggerStatsCounters() {
            const counters = document.querySelectorAll('[data-counter]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-counter'), 10);
                let current = 0;
                const speed = 150 / target; // adjust speed scale
                
                if (counter.innerText === "0") {
                    const timer = setInterval(() => {
                        current++;
                        counter.innerText = current + (target === 15 ? "+" : (target === 1 ? " Year" : "+"));
                        if (current >= target) {
                            clearInterval(timer);
                            counter.innerText = target + (target === 15 ? "+" : (target === 1 ? " Year" : "+"));
                        }
                    }, speed * 10);
                }
            });
        }

        // ==========================================
        // MOUSE INTERACTIVITY & CURSOR TRAIL
        // ==========================================
        function setupMouseInteractions() {
            const cursor = document.getElementById('custom-cursor');
            const dot = document.getElementById('custom-cursor-dot');
            const glow = document.getElementById('ambient-mouse-glow');

            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Move custom tracking cursor (using smooth delays)
                cursor.style.left = posX + "px";
                cursor.style.top = posY + "px";

                dot.style.left = posX + "px";
                dot.style.top = posY + "px";

                // Move static glowing backplane ambient spot
                glow.style.left = posX + "px";
                glow.style.top = posY + "px";
            });

            // Tracking interactive components for cursor size reactions
            const interactiveElements = document.querySelectorAll('a, button, input, textarea');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('w-14', 'h-14', 'border-cyan-400/60', 'bg-cyan-500/10');
                    cursor.classList.remove('w-8', 'h-8');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.add('w-8', 'h-8');
                    cursor.classList.remove('w-14', 'h-14', 'border-cyan-400/60', 'bg-cyan-500/10');
                });
            });
        }

        // ==========================================
        // 3D TILT EFFECT FOR PREMIUM CARDS
        // ==========================================
        function setupTiltCards() {
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleCardTilt);
                card.removeEventListener('mouseleave', resetCardTilt);

                card.addEventListener('mousemove', handleCardTilt);
                card.addEventListener('mouseleave', resetCardTilt);
            });
        }

        function handleCardTilt(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = -(y / (rect.height / 2)) * 8; // Max rot angle
            const rotateY = (x / (rect.width / 2)) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }

        function resetCardTilt(e) {
            const card = e.currentTarget;
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.boxShadow = "none";
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }