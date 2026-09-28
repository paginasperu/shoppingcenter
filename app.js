const directoryConfig = { name: 'DIRECTORIO OFICIAL', logoUrl: '', timeZone: 'America/Lima', contactWhatsapp: '51950141414' };
let providersData = [];
const localBusinesses = [{"id":1,"name":"Costa y Sabor","description":"Ceviches y platos marinos preparados al momento.","category":"Restaurantes","type":"Cevichería","location":"Local A-01","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":["Ceviche clásico","Chicharrón de pescado"],"services":[],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[1,2,3,4,5,6],"opens":"11:00","closes":"19:00"}]},{"id":2,"name":"Sazón a la Brasa","description":"Pollos a la brasa y opciones para compartir.","category":"Restaurantes","type":"Pollería","location":"Local A-02","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":["Pollo a la brasa","Papas fritas"],"services":[],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[0,1,2,3,4,5,6],"opens":"12:00","closes":"22:00"}]},{"id":3,"name":"Manos y Color","description":"Cuidado y diseño de uñas con atención previa cita.","category":"Belleza","type":"Salón de uñas","location":"Local B-01","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":["Manicura","Diseño de uñas"],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[1,2,3,4,5,6],"opens":"10:00","closes":"20:00"}]},{"id":4,"name":"Corte Urbano","description":"Cortes de cabello y arreglo de barba.","category":"Belleza","type":"Barbería","location":"Local B-02","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":["Corte clásico","Arreglo de barba"],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[2,3,4,5,6,0],"opens":"09:00","closes":"19:00"}]},{"id":5,"name":"Estilo Diario","description":"Prendas y accesorios para uso diario.","category":"Moda","type":"Boutique","location":"Local C-01","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":["Blusas","Accesorios"],"services":[],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[1,2,3,4,5,6],"opens":"10:00","closes":"20:00"}]},{"id":6,"name":"Mundo Móvil","description":"Accesorios y protección para teléfonos.","category":"Tecnología","type":"Accesorios de celulares","location":"Local C-02","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":["Fundas","Cargadores"],"services":[],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[0,1,2,3,4,5,6],"opens":"10:00","closes":"21:00"}]},{"id":7,"name":"Casa Viva","description":"Artículos decorativos para el hogar.","category":"Hogar","type":"Decoración","location":"Local D-01","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":["Lámparas","Cuadros"],"services":[],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[1,2,3,4,5,6],"opens":"10:00","closes":"19:00"}]},{"id":8,"name":"Soporte Express","description":"Diagnóstico y reparación de teléfonos.","category":"Servicios","type":"Reparación de celulares","location":"Local D-02","whatsapp":"51950141414","callPhone":"950141414","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":["Diagnóstico","Cambio de pantalla"],"profilePhoto":"","coverPhoto":"","openingHours":[{"days":[1,2,3,4,5,6],"opens":"09:00","closes":"18:00"}]}];

function parseBusinessCsv(csv) {
    const rows = [];
    let row = [], cell = '', quoted = false;
    for (let i = 0; i < csv.length; i++) {
        const char = csv[i], next = csv[i + 1];
        if (char === '"' && quoted && next === '"') { cell += '"'; i++; }
        else if (char === '"') quoted = !quoted;
        else if (char === ',' && !quoted) { row.push(cell.trim()); cell = ''; }
        else if ((char === '\n' || char === '\r') && !quoted) {
            if (char === '\r' && next === '\n') i++;
            row.push(cell.trim());
            if (row.some(Boolean)) rows.push(row);
            row = []; cell = '';
        } else cell += char;
    }
    if (cell || row.length) { row.push(cell.trim()); rows.push(row); }
    if (rows.length < 2) return [];
    const headers = rows.shift().map(value => value.replace(/^\uFEFF/, '').toLowerCase());
    const get = (record, ...names) => names.map(name => record[name] || '').find(Boolean) || '';
    return rows.map((values, index) => {
        const row = Object.fromEntries(headers.map((key, i) => [key, values[i] || '']));
        const days = get(row, 'dias').split(/[|; ]+/).filter(Boolean).map(value => Number(value)).filter(value => value >= 0 && value <= 6);
        const opens = get(row, 'abre'), closes = get(row, 'cierra');
        return {
            id: Number(get(row, 'id')) || index + 1,
            name: get(row, 'nombre'), description: get(row, 'descripcion'),
            category: get(row, 'categoria'), type: get(row, 'tipo'), location: get(row, 'ubicacion'),
            whatsapp: get(row, 'whatsapp'), callPhone: get(row, 'telefono'),
            additionalPhones: get(row, 'telefonos adicionales').split(/[|;]/).filter(Boolean),
            instagram: get(row, 'instagram'), facebook: get(row, 'facebook'), tiktok: get(row, 'tiktok'),
            products: get(row, 'productos').split(/[|;]/).filter(Boolean),
            services: get(row, 'servicios').split(/[|;]/).filter(Boolean),
            profilePhoto: get(row, 'foto de perfil'), coverPhoto: get(row, 'foto de portada'),
            openingHours: days.length && opens && closes ? [{ days, opens, closes }] : []
        };
    }).filter(item => item.name);
}

function loadBusinesses() {
    if (location.protocol === 'file:') {
        providersData = localBusinesses;
        init();
        return;
    }
    fetch('negocios.csv').then(response => {
        if (!response.ok) throw new Error('No se pudo cargar negocios.csv');
        return response.text();
    }).then(csv => {
        providersData = parseBusinessCsv(csv);
        init();
    }).catch(error => {
        console.error(error);
        providersData = localBusinesses;
        init();
    });
}

        // Estado de categorías, filtros y ficha abierta.
        let activeCategory = "Todos";
        let activeType = "all";
        let categorySelected = false;
        let modalReturnFocus = null;
        let modalCloseTimer = null;
        let currentDetailId = null;
        let lastOpenStateSignature = '';
        let pendingStatusRefresh = false;
        let categoryOptions = [];
        const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
        const normalizeSearch = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
        const matchesSearch = (item, query) => !query || normalizeSearch([item.name, item.description, item.category, item.type, item.location, ...item.products, ...item.services].join(' ')).includes(query);
        const businessInitials = name => String(name || '').trim().split(/\s+/).slice(0, 2).map(word => word[0] || '').join('').toLocaleUpperCase('es');
        const safePhoto = value => {
            const url = String(value || '').trim();
            return /^(https?:\/\/|\.?\.?\/|[a-z0-9_-][a-z0-9_./-]*$)/i.test(url) ? url : '';
        };
        const whatsappUrl = item => {
            const digits = String(item.whatsapp || '').replace(/\D/g, '');
            return digits.length >= 8 && digits.length <= 15
                ? `https://wa.me/${digits}?text=${encodeURIComponent(`Hola, vi tu negocio ${item.name} en ${directoryConfig.name}...`)}`
                : null;
        };
        function getOpenState(item, now = new Date()) {
            if (!item.openingHours?.length) return null;
            const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
                timeZone: directoryConfig.timeZone, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
            }).formatToParts(now).map(part => [part.type, part.value]));
            const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(parts.weekday);
            const minute = Number(parts.hour) * 60 + Number(parts.minute);
            const toMinute = time => Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
            return item.openingHours.some(slot => {
                const opens = toMinute(slot.opens), closes = toMinute(slot.closes);
                if (opens === closes) return false;
                if (opens < closes) return slot.days.includes(day) && minute >= opens && minute < closes;
                const previousDay = (day + 6) % 7;
                return (slot.days.includes(day) && minute >= opens) || (slot.days.includes(previousDay) && minute < closes);
            });
        }
        function formatHours(item) {
            if (!item.openingHours?.length) return 'Horario no informado';
            const days = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
            return item.openingHours.map(slot => `${slot.days.length === 7 ? 'Todos los días' : `${days[slot.days[0]]}–${days[slot.days.at(-1)]}`} · ${slot.opens}–${slot.closes}`).join('; ');
        }
        function syncCategoryControls() {
            document.getElementById('categoryNavigation').innerHTML = categoryOptions.map((name, index) =>
                `<button type="button" class="category-option" data-category-index="${index}" aria-pressed="${name === activeCategory}">${escapeHtml(name)}</button>`
            ).join('');
            const types = [...new Set(providersData.filter(item => activeCategory === 'Todos' || item.category === activeCategory).map(item => item.type))];
            const typeFilter = document.getElementById('typeFilter');
            typeFilter.innerHTML = '<option value="all">Todos los tipos</option>' + types.map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');
            typeFilter.value = activeType;
        }

        // Inicialización
        function init() {
            categoryOptions = ['Todos', ...new Set(providersData.map(item => item.category))];
            // Ajusta directoryConfig para cada mercado, galería, centro comercial o feria.
            document.title = `${directoryConfig.name} - Negocios, productos y servicios`;
            document.getElementById('directoryName').textContent = directoryConfig.name;
            document.getElementById('directoryFooterName').textContent = directoryConfig.name;
            const directoryPhone = String(directoryConfig.contactWhatsapp || '').replace(/\D/g, '');
            if (directoryPhone.length >= 8 && directoryPhone.length <= 15) {
                document.getElementById('subscribeLink').href = `https://wa.me/${directoryPhone}?text=${encodeURIComponent(`Hola, quiero suscribirme gratis al ${directoryConfig.name}...`)}`;
                document.getElementById('contactLink').href = `https://wa.me/${directoryPhone}?text=${encodeURIComponent(`Hola, quiero contactar al ${directoryConfig.name}...`)}`;
            }
            document.getElementById('businessLogo').alt = directoryConfig.name;
            document.querySelector('.header-brand').setAttribute('aria-label', `${directoryConfig.name}, inicio`);
            if (directoryConfig.logoUrl) document.getElementById('businessLogo').src = directoryConfig.logoUrl;
            document.getElementById('categoryNavigation').addEventListener('click', event => {
                const button = event.target.closest('[data-category-index]');
                if (button) selectCategory(categoryOptions[Number(button.dataset.categoryIndex)]);
            });
            const detailModal = document.getElementById('modalDetail');
            detailModal.addEventListener('click', event => {
                if (event.target === detailModal) toggleModal('modalDetail', false);
            });
            document.addEventListener('keydown', event => {
                if (detailModal.classList.contains('hidden')) return;
                if (event.key === 'Escape') {
                    event.preventDefault();
                    toggleModal('modalDetail', false);
                } else if (event.key === 'Tab') {
                    const focusable = [...detailModal.querySelectorAll('button:not([disabled]), a[href]')]
                        .filter(element => !element.classList.contains('hidden'));
                    if (!focusable.length) return;
                    const first = focusable[0], last = focusable.at(-1);
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            });
            applyFilters();
            setInterval(() => {
                if (!document.hidden) refreshOpenStates();
            }, 60000);
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) refreshOpenStates();
            });
            window.lucide?.createIcons?.();
            const siteHeader = document.getElementById('siteHeader');
            let lastScrollY = window.scrollY;
            let hiddenDistance = 0;
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                const movement = currentScrollY - lastScrollY;
                const headerHeight = siteHeader.offsetHeight;
                hiddenDistance = currentScrollY < 30
                    ? 0
                    : Math.max(0, Math.min(headerHeight, hiddenDistance + movement * 0.75));
                siteHeader.style.transform = `translateY(-${hiddenDistance}px)`;
                lastScrollY = currentScrollY;
            }, { passive: true });
        };

        // Seleccionar Categoría
        function selectCategory(catName) {
            activeCategory = catName;
            categorySelected = catName !== 'Todos';
            activeType = 'all';
            applyFilters();
        }

        // Cambiar subcategoría o tipo de negocio
        function setTypeFilter(type) {
            activeType = type;
            applyFilters();
        }
        function searchAllCategories() {
            activeCategory = 'Todos';
            activeType = 'all';
            categorySelected = false;
            applyFilters();
            document.getElementById('moreFilters').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Restablecer Filtros
        function resetFilters() {
            document.getElementById('searchInput').value = '';
            const mobileSearch = document.getElementById('mobileSearchInput'); if (mobileSearch) mobileSearch.value = '';
            document.getElementById('openNowFilter').checked = false;
            activeCategory = "Todos";
            activeType = "all";
            categorySelected = false;
            document.getElementById('typeFilter').value = 'all';
            
            applyFilters();
        }
        function goHome() {
            resetFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Filtrar y Renderizar Tarjetas
        function applyFilters(now = new Date()) {
            syncCategoryControls();
            const searchValue = normalizeSearch(document.getElementById('searchInput').value);
            const openOnly = document.getElementById('openNowFilter').checked;
            const hasSearch = Boolean(searchValue || categorySelected || openOnly || activeType !== 'all');
            document.body.classList.toggle('has-search', hasSearch);
            document.getElementById('moreFilters').classList.toggle('hidden', !hasSearch);
            document.getElementById('mobileSearchInput').value = document.getElementById('searchInput').value;

            const filtered = providersData.filter(item => {
                // Filtro Categoría
                const matchesCategory = (activeCategory === "Todos") || (item.category === activeCategory);
                
                // Filtro Tipo
                const matchesType = (activeType === "all") || (item.type === activeType);

                // Abierto/cerrado se calcula del horario publicado en la zona del directorio.
                const openState = getOpenState(item, now);
                const matchesHours = !openOnly || openState === true;

                // Filtro Texto
                const matchesText = matchesSearch(item, searchValue);

                return matchesCategory && matchesType && matchesHours && matchesText;
            });

            document.getElementById('resultsCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado' : 'resultados'}`;
            renderGrid(filtered, now);
            const hasBroaderMatches = !filtered.length && activeCategory !== 'Todos' && Boolean(searchValue) &&
                providersData.some(item => item.category !== activeCategory && (!openOnly || getOpenState(item, now) === true) && matchesSearch(item, searchValue));
            document.getElementById('searchAllCategoriesButton').classList.toggle('hidden', !hasBroaderMatches);
            lastOpenStateSignature = openStateSignature(now);
        }

        // Renderizar fichas con campos públicos de NEGOCIOS.
        function renderGrid(items, now = new Date()) {
            const grid = document.getElementById('providersGrid');
            const emptyState = document.getElementById('emptyState');
            if (!items.length) {
                grid.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }
            emptyState.classList.add('hidden');
            grid.innerHTML = items.map(item => {
                const open = getOpenState(item, now);
                const contact = whatsappUrl(item);
                const profile = safePhoto(item.profilePhoto);
                const openText = open === null ? 'Horario no informado' : open ? 'Abierto ahora' : 'Cerrado ahora';
                const statusClass = open === null ? 'unknown' : open ? '' : 'closed';
                return `
                <article class="provider-card">
                    <button type="button" onclick="openDetailModal(${item.id})" aria-label="Ver ficha de ${escapeHtml(item.name)}" class="provider-primary">
                        <span class="provider-avatar" aria-hidden="true">
                            ${profile ? `<img src="${escapeHtml(profile)}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden>${escapeHtml(businessInitials(item.name))}</span>` : `<span>${escapeHtml(businessInitials(item.name))}</span>`}
                        </span>
                        <span class="provider-main">
                            <span class="provider-top">
                                <span class="provider-classification">${escapeHtml(item.category)} · ${escapeHtml(item.type)}</span>
                                <span class="provider-status ${statusClass}" data-status-id="${item.id}">${openText}</span>
                            </span>
                            <span class="provider-name">${escapeHtml(item.name)}</span>
                            <span class="provider-description">${escapeHtml(item.description)}</span>
                        </span>
                    </button>
                    <div class="provider-footer">
                        <span class="provider-location"><i data-lucide="map-pin" class="w-3.5 h-3.5 shrink-0" aria-hidden="true"></i><span>${escapeHtml(item.location)}</span></span>
                        <button type="button" onclick="openDetailModal(${item.id})" class="provider-detail" aria-label="Ver ficha de ${escapeHtml(item.name)}">Ver ficha</button>
                        ${contact ? `<a href="${escapeHtml(contact)}" target="_blank" rel="noopener noreferrer" class="provider-whatsapp" aria-label="Contactar a ${escapeHtml(item.name)} por WhatsApp">WhatsApp</a>` : ''}
                    </div>
                </article>`;
            }).join('');
            window.lucide?.createIcons?.();
        }

        function openStateSignature(now = new Date()) {
            return providersData.map(item => {
                const state = getOpenState(item, now);
                return state === null ? '?' : state ? '1' : '0';
            }).join('');
        }
        function refreshOpenStates(now = new Date()) {
            const signature = openStateSignature(now);
            if (signature === lastOpenStateSignature) return;
            lastOpenStateSignature = signature;
            const modal = document.getElementById('modalDetail');
            if (currentDetailId !== null && !modal.classList.contains('hidden')) {
                const item = providersData.find(record => record.id === currentDetailId);
                if (item) {
                    const state = getOpenState(item, now);
                    document.getElementById('modalOpenStatus').textContent = state === null ? 'Horario no informado' : state ? 'Abierto ahora' : 'Cerrado ahora';
                }
            }
            if (document.getElementById('openNowFilter').checked) {
                if (modal.classList.contains('hidden')) applyFilters(now);
                else pendingStatusRefresh = true;
                return;
            }
            document.querySelectorAll('[data-status-id]').forEach(label => {
                const item = providersData.find(record => record.id === Number(label.dataset.statusId));
                if (!item) return;
                const state = getOpenState(item, now);
                label.textContent = state === null ? 'Horario no informado' : state ? 'Abierto ahora' : 'Cerrado ahora';
                label.classList.toggle('closed', state === false);
                label.classList.toggle('unknown', state === null);
            });
        }

        function openDetailModal(id) {
            const item = providersData.find(record => record.id === id);
            if (!item) return;
            currentDetailId = id;
            const image = document.getElementById('modalImg');
            const cover = safePhoto(item.coverPhoto);
            if (cover) image.src = cover;
            else image.removeAttribute('src');
            image.classList.toggle('hidden', !cover);
            image.alt = cover ? `Portada de ${item.name}` : '';
            const profile = safePhoto(item.profilePhoto);
            const profileImage = document.getElementById('modalProfileImg');
            if (profile) profileImage.src = profile;
            else profileImage.removeAttribute('src');
            profileImage.classList.toggle('hidden', !profile);
            profileImage.onerror = () => { profileImage.classList.add('hidden'); document.getElementById('modalInitials').classList.remove('hidden'); };
            profileImage.alt = profile ? `Logo o foto de ${item.name}` : '';
            const initials = document.getElementById('modalInitials');
            initials.textContent = businessInitials(item.name);
            initials.classList.toggle('hidden', Boolean(profile));
            document.getElementById('modalTitle').textContent = item.name;
            document.getElementById('modalCategory').textContent = item.category;
            document.getElementById('modalTypeBadge').textContent = item.type;
            document.getElementById('modalLocation').textContent = item.location;
            const open = getOpenState(item);
            document.getElementById('modalOpenStatus').textContent = open === null ? 'Horario no informado' : open ? 'Abierto ahora' : 'Cerrado ahora';
            document.getElementById('modalHours').textContent = formatHours(item);
            document.getElementById('modalPhone').textContent = item.callPhone || 'No informado';
            document.getElementById('modalDescription').textContent = item.description;
            const contactLinks = [];
            const phoneNumbers = (item.additionalPhones || []).filter(Boolean);
            phoneNumbers.forEach(phone => {
                const dial = String(phone).replace(/[^+\d]/g, '');
                if (dial) contactLinks.push(`<a href="tel:${escapeHtml(dial)}" class="px-3 py-2 rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">Teléfono adicional: ${escapeHtml(phone)}</a>`);
            });
            [['Instagram',item.instagram],['Facebook',item.facebook],['TikTok',item.tiktok]].forEach(([label,url]) => {
                if (/^https:\/\//i.test(url || '')) contactLinks.push(`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">${label}</a>`);
            });
            document.getElementById('modalContactLinks').innerHTML = contactLinks.join('');
            const featureMarkup = values => values.map(value => `<li class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">${escapeHtml(value)}</li>`).join('');
            document.getElementById('modalProducts').innerHTML = featureMarkup(item.products || []);
            document.getElementById('modalServices').innerHTML = featureMarkup(item.services || []);
            document.getElementById('modalProductsSection').classList.toggle('hidden', !item.products?.length);
            document.getElementById('modalServicesSection').classList.toggle('hidden', !item.services?.length);
            const dial = String(item.callPhone || '').replace(/[^+\d]/g, '');
            const callButton = document.getElementById('modalCallBtn');
            if (dial) callButton.href = `tel:${dial}`;
            else callButton.removeAttribute('href');
            callButton.classList.toggle('hidden', !dial);
            const contact = whatsappUrl(item);
            const contactButton = document.getElementById('modalWhatsappBtn');
            if (contact) contactButton.href = contact;
            else contactButton.removeAttribute('href');
            contactButton.textContent = 'Contactar por WhatsApp';
            contactButton.classList.toggle('hidden', !contact);
            toggleModal('modalDetail', true);
            window.lucide?.createIcons?.();
        }

        // Controlador Genérico de Modales
        function toggleModal(modalId, show) {
            const modal = document.getElementById(modalId);
            if (!modal) return;

            if (show) {
                clearTimeout(modalCloseTimer);
                modalReturnFocus = document.activeElement;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                modal.querySelector('[aria-label="Cerrar ficha"]')?.focus();
                setTimeout(() => {
                    const content = modal.querySelector('div');
                    if(content) {
                        content.classList.remove('scale-95', 'opacity-0');
                        content.classList.add('scale-100', 'opacity-100');
                    }
                }, 10);
            } else {
                if (modal.classList.contains('hidden')) return;
                const content = modal.querySelector('div');
                if(content) {
                    content.classList.remove('scale-100', 'opacity-100');
                    content.classList.add('scale-95', 'opacity-0');
                }
                clearTimeout(modalCloseTimer);
                modalCloseTimer = setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                    currentDetailId = null;
                    if (pendingStatusRefresh) {
                        pendingStatusRefresh = false;
                        applyFilters();
                    }
                    (modalReturnFocus?.isConnected ? modalReturnFocus : document.getElementById('searchInput')).focus();
                }, 200);
            }
        }

        function syncMobileSearch(value) { const el=document.getElementById('searchInput'); if(el){el.value=value; applyFilters();} }
        function showSearchResults(event) {
            event.preventDefault();
            const field = event.currentTarget.querySelector('input');
            const query = field.value.trim();
            if (!query) return;
            document.getElementById('searchInput').value = field.value;
            applyFilters();
            const target = document.getElementById('emptyState').classList.contains('hidden') ? 'moreFilters' : 'emptyState';
            document.getElementById(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

loadBusinesses();

