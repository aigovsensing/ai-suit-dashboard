const STATE_ABBR = {
    'ALABAMA': 'AL', 'ALASKA': 'AK', 'ARIZONA': 'AZ', 'ARKANSAS': 'AR', 'CALIFORNIA': 'CA',
    'COLORADO': 'CO', 'CONNECTICUT': 'CT', 'DELAWARE': 'DE', 'FLORIDA': 'FL', 'GEORGIA': 'GA',
    'HAWAII': 'HI', 'IDAHO': 'ID', 'ILLINOIS': 'IL', 'INDIANA': 'IN', 'IOWA': 'IA',
    'KANSAS': 'KS', 'KENTUCKY': 'KY', 'LOUISIANA': 'LA', 'MAINE': 'ME', 'MARYLAND': 'MD',
    'MASSACHUSETTS': 'MA', 'MICHIGAN': 'MI', 'MINNESOTA': 'MN', 'MISSISSIPPI': 'MS', 'MISSOURI': 'MO',
    'MONTANA': 'MT', 'NEBRASKA': 'NE', 'NEVADA': 'NV', 'NEW HAMPSHIRE': 'NH', 'NEW JERSEY': 'NJ',
    'NEW MEXICO': 'NM', 'NEW YORK': 'NY', 'NORTH CAROLINA': 'NC', 'NORTH DAKOTA': 'ND', 'OHIO': 'OH',
    'OKLAHOMA': 'OK', 'OREGON': 'OR', 'PENNSYLVANIA': 'PA', 'RHODE ISLAND': 'RI', 'SOUTH CAROLINA': 'SC',
    'SOUTH DAKOTA': 'SD', 'TENNESSEE': 'TN', 'TEXAS': 'TX', 'UTAH': 'UT', 'VERMONT': 'VT',
    'VIRGINIA': 'VA', 'WASHINGTON': 'WA', 'WEST VIRGINIA': 'WV', 'WI': 'WI', 'WY': 'WY',
    'DISTRICT OF COLUMBIA': 'DC', 'WASHINGTON D.C.': 'DC',
    // Korean names
    '캘리포니아': 'CA', '뉴욕': 'NY', '버지니아': 'VA', '메사추세츠': 'MA', '일리노이': 'IL',
    '조지아': 'GA', '네바다': 'NV', '플로리다': 'FL', '델라웨어': 'DE', '펜실베이니아': 'PA',
    '메릴랜드': 'MD', '애리조나': 'AZ', '몬태나': 'MT', '텍사스': 'TX', '워싱턴': 'WA',
    '콜로라도': 'CO', '뉴저지': 'NJ', '미시간': 'MI', '오하이오': 'OH', '코네티컷': 'CT'
};

const COUNTRY_MAP = {
    '미국': 'us',
    '한국': 'kr',
    '독일': 'de',
    '영국': 'gb',
    '프랑스': 'fr',
    '캐나다': 'ca',
    '일본': 'jp',
    '중국': 'cn',
    '대한민국': 'kr'
};

const COUNTRY_LABEL_OVERRIDE = {
    'kr': 'KO',
    'us': 'USA',
    'gb': 'UK'
};

const FULL_NAMES = {
    // US States
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
    'DC': 'District of Columbia',
    
    // Global Countries (ISO 3166-1 alpha-2)
    'af': 'Afghanistan', 'al': 'Albania', 'dz': 'Algeria', 'ad': 'Andorra', 'ao': 'Angola',
    'ag': 'Antigua and Barbuda', 'ar': 'Argentina', 'am': 'Armenia', 'au': 'Australia', 'at': 'Austria',
    'az': 'Azerbaijan', 'bs': 'Bahamas', 'bh': 'Bahrain', 'bd': 'Bangladesh', 'bb': 'Barbados',
    'by': 'Belarus', 'be': 'Belgium', 'bz': 'Belize', 'bj': 'Benin', 'bt': 'Bhutan',
    'bo': 'Bolivia', 'ba': 'Bosnia and Herzegovina', 'bw': 'Botswana', 'br': 'Brazil', 'bn': 'Brunei',
    'bg': 'Bulgaria', 'bf': 'Burkina Faso', 'bi': 'Burundi', 'kh': 'Cambodia', 'cm': 'Cameroon',
    'ca': 'Canada', 'cv': 'Cape Verde', 'cf': 'Central African Republic', 'td': 'Chad', 'cl': 'Chile',
    'cn': 'China', 'co': 'Colombia', 'km': 'Comoros', 'cg': 'Congo', 'cd': 'DR Congo',
    'cr': 'Costa Rica', 'hr': 'Croatia', 'cu': 'Cuba', 'cy': 'Cyprus', 'cz': 'Czech Republic',
    'dk': 'Denmark', 'dj': 'Djibouti', 'dm': 'Dominica', 'do': 'Dominican Republic', 'ec': 'Ecuador',
    'eg': 'Egypt', 'sv': 'El Salvador', 'gq': 'Equatorial Guinea', 'er': 'Eritrea', 'ee': 'Estonia',
    'et': 'Ethiopia', 'fj': 'Fiji', 'fi': 'Finland', 'fr': 'France', 'ga': 'Gabon',
    'gm': 'Gambia', 'ge': 'Georgia', 'de': 'Germany', 'gh': 'Ghana', 'gr': 'Greece',
    'gd': 'Grenada', 'gt': 'Guatemala', 'gn': 'Guinea', 'gw': 'Guinea-Bissau', 'gy': 'Guyana',
    'ht': 'Haiti', 'hn': 'Honduras', 'hu': 'Hungary', 'is': 'Iceland', 'in': 'India',
    'id': 'Indonesia', 'ir': 'Iran', 'iq': 'Iraq', 'ie': 'Ireland', 'il': 'Israel',
    'it': 'Italy', 'jm': 'Jamaica', 'jp': 'Japan', 'jo': 'Jordan', 'kz': 'Kazakhstan',
    'ke': 'Kenya', 'ki': 'Kiribati', 'kp': 'North Korea', 'kr': 'South Korea', 'kw': 'Kuwait',
    'kg': 'Kyrgyzstan', 'la': 'Laos', 'lv': 'Latvia', 'lb': 'Lebanon', 'ls': 'Lesotho',
    'lr': 'Liberia', 'ly': 'Libya', 'li': 'Liechtenstein', 'lt': 'Lithuania', 'lu': 'Luxembourg',
    'mg': 'Madagascar', 'mw': 'Malawi', 'my': 'Malaysia', 'mv': 'Maldives', 'ml': 'Mali',
    'mt': 'Malta', 'mh': 'Marshall Islands', 'mr': 'Mauritania', 'mu': 'Mauritius', 'mx': 'Mexico',
    'fm': 'Micronesia', 'md': 'Moldova', 'mc': 'Monaco', 'mn': 'Mongolia', 'me': 'Montenegro',
    'ma': 'Morocco', 'mz': 'Mozambique', 'mm': 'Myanmar', 'na': 'Namibia', 'nr': 'Nauru',
    'np': 'Nepal', 'nl': 'Netherlands', 'nz': 'New Zealand', 'ni': 'Nicaragua', 'ne': 'Niger',
    'ng': 'Nigeria', 'mk': 'North Macedonia', 'no': 'Norway', 'om': 'Oman', 'pk': 'Pakistan',
    'pw': 'Palau', 'pa': 'Panama', 'pg': 'Papua New Guinea', 'py': 'Paraguay', 'pe': 'Peru',
    'ph': 'Philippines', 'pl': 'Poland', 'pt': 'Portugal', 'qa': 'Qatar', 'ro': 'Romania',
    'ru': 'Russia', 'rw': 'Rwanda', 'kn': 'Saint Kitts and Nevis', 'lc': 'Saint Lucia', 'vc': 'Saint Vincent and the Grenadines',
    'ws': 'Samoa', 'sm': 'San Marino', 'st': 'Sao Tome and Principe', 'sa': 'Saudi Arabia', 'sn': 'Senegal',
    'rs': 'Serbia', 'sc': 'Seychelles', 'sl': 'Sierra Leone', 'sg': 'Singapore', 'sk': 'Slovakia',
    'si': 'Slovenia', 'sb': 'Solomon Islands', 'so': 'Somalia', 'za': 'South Africa', 'ss': 'South Sudan',
    'es': 'Spain', 'lk': 'Sri Lanka', 'sd': 'Sudan', 'sr': 'Suriname', 'se': 'Sweden',
    'ch': 'Switzerland', 'sy': 'Syria', 'tw': 'Taiwan', 'tj': 'Tajikistan', 'tz': 'Tanzania',
    'th': 'Thailand', 'tl': 'Timor-Leste', 'tg': 'Togo', 'to': 'Tonga', 'tt': 'Trinidad and Tobago',
    'tn': 'Tunisia', 'tr': 'Turkey', 'tm': 'Turkmenistan', 'tv': 'Tuvalu', 'ug': 'Uganda',
    'ua': 'Ukraine', 'ae': 'United Arab Emirates', 'gb': 'United Kingdom', 'us': 'United States', 'uy': 'Uruguay',
    'uz': 'Uzbekistan', 'vu': 'Vanuatu', 've': 'Venezuela', 'vn': 'Vietnam', 'ye': 'Yemen',
    'zm': 'Zambia', 'zw': 'Zimbabwe', 'hk': 'Hong Kong', 'mo': 'Macau', 'pr': 'Puerto Rico'
};


let allCases = [];
let currentFilteredCases = [];

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Core App Setup
    await initApp();
    initMapControls();
    
    // 2. Load Maps and Labels
    // US labels (Static SVG in HTML)
    setTimeout(() => {
        initUSLabels();
        refreshVisualization();
    }, 200);

    // World Map (External SVG)
    try {
        await loadWorldMap();
        initWorldLabels();
        refreshVisualization();
    } catch (err) {
        console.error("World map initialization failed:", err);
    }
});

// Helper to trigger visualization refresh without re-fetching data
function refreshVisualization() {
    if (allCases.length > 0) {
        const checkboxes = document.querySelectorAll('#status-dropdown input[type="checkbox"]');
        const selectedStatuses = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        updateVisualization(allCases, selectedStatuses);
    }
}


async function loadWorldMap() {
    try {
        const response = await fetch('/image/world_map.svg');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "image/svg+xml");
        const pathsGroup = xmlDoc.querySelector('g');
        const container = document.getElementById('world-paths');
        
        if (container && pathsGroup) {
            // Transfer paths and preserve IDs
            Array.from(pathsGroup.children).forEach(child => {
                const clone = child.cloneNode(true);
                // Standardize class for styling
                if (clone.tagName === 'path') {
                    clone.classList.add('state-path', 'country');
                } else if (clone.tagName === 'g') {
                    clone.querySelectorAll('path').forEach(p => p.classList.add('state-path', 'country'));
                }
                container.appendChild(clone);
            });
        }
    } catch (err) {
        console.error("Failed to load world map:", err);
    }
}


async function initApp() {
    await populateFileList();
    
    // Search Functionality
    const searchInput = document.getElementById('case-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderSidebar(currentFilteredCases);
        });
    }

    const toggleBtn = document.getElementById('status-toggle-btn');
    const dropdown = document.getElementById('status-dropdown');
    
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
            dropdown.classList.remove('show');
        }
    });

    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateToggleBtnText);
    });

    document.getElementById('visualize-btn').addEventListener('click', handleVisualize);
    document.getElementById('country-select').addEventListener('change', handleVisualize);
    
    // Initial UI state
    updateToggleBtnText();

    // Help Modal
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const closeHelpBtn = document.getElementById('close-help-btn');
    
    if (helpBtn && helpModal && closeHelpBtn) {
        helpBtn.onclick = () => helpModal.style.display = 'flex';
        closeHelpBtn.onclick = () => helpModal.style.display = 'none';
        window.addEventListener('click', (e) => {
            if (e.target === helpModal) helpModal.style.display = 'none';
        });
    }

    // Attempt an initial visualize if values are set
    if (document.getElementById('csv-select').value) {
        await handleVisualize();
    }
}

function updateToggleBtnText() {
    const checkboxes = document.querySelectorAll('#status-dropdown input[type="checkbox"]');
    const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
    const btn = document.getElementById('status-toggle-btn');
    
    if (selected.length === 0) {
        btn.textContent = "진행상태: 선택 없음";
    } else if (selected.length === checkboxes.length) {
        btn.textContent = "진행상태: 전체";
    } else {
        btn.textContent = `진행상태: ${selected[0]}${selected.length > 1 ? ' 외 ' + (selected.length - 1) : ''}`;
    }
}

async function populateFileList() {
    try {
        const response = await fetch('/api/files');
        if (!response.ok) throw new Error("Failed to fetch files");
        const files = await response.json();
        const select = document.getElementById('csv-select');
        
        files.forEach(file => {
            const option = document.createElement('option');
            option.value = file;
            option.textContent = file;
            select.appendChild(option);
        });
        
        if (files.length > 0) {
            select.value = files[0];
        }
    } catch (err) {
        console.error("Failed to load file list:", err);
    }
}

async function handleVisualize() {
    const fileName = document.getElementById('csv-select').value;
    const checkboxes = document.querySelectorAll('#status-dropdown input[type="checkbox"]');
    const selectedStatuses = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
    
    if (selectedStatuses.length === 0) {
        alert("적어도 하나의 진행상태를 선택해주세요.");
        return;
    }

    const url = fileName ? `/api/cases?file_name=${fileName}` : '/api/cases';
    
    const btn = document.getElementById('visualize-btn');
    const originalText = btn.textContent;
    btn.innerHTML = '<span class="loader"></span> 갱신 중...';
    btn.disabled = true;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errBody = await response.json();
            throw new Error(errBody.detail || "Server error");
        }
        
        const result = await response.json();
        allCases = result.data || [];
        
        updateVisualization(allCases, selectedStatuses);
    } catch (err) {
        console.error("Error fetching case data:", err);
        alert("Failed to load data: " + err.message);
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

function updateVisualization(cases, selectedStatuses) {
    if (!cases || !Array.isArray(cases)) {
        console.error("Invalid cases data", cases);
        return;
    }

    // 1. Filter cases by selected statuses
    const filtered = cases.filter(c => {
        if (!c.status) return false;
        const caseStatus = c.status.trim();
        return selectedStatuses.some(s => {
            const filterValue = s.trim();
            if (filterValue === '종' || filterValue === '종결' || filterValue === '종료') {
                return caseStatus.includes('종결') || caseStatus.includes('종료') || caseStatus.includes('종');
            }
            return caseStatus.includes(filterValue);
        });
    });

    // Store globally for search filtering
    currentFilteredCases = filtered;

    const countryType = document.getElementById('country-select').value;
    const stats = {};
    let maxCount = 0;

    // Calculate global metrics for metrics display
    const worldTotal = filtered.length;
    const usaCases = filtered.filter(c => {
        const country = (c.country || "").trim().toLowerCase();
        return country === 'us' || country === '미국' || country === 'usa';
    });
    const usaCount = usaCases.length;

    // 2. Further filter/group for visualization based on view (USA/World)
    let displaySet = (countryType === 'USA') ? usaCases : filtered;

    displaySet.forEach(c => {
        const id = extractLocation(c, countryType);
        if (id) {
            stats[id] = stats[id] || [];
            stats[id].push(c);
            maxCount = Math.max(maxCount, stats[id].length);
        }
    });

    // 3. Render all components
    renderStats(displaySet.length, selectedStatuses, countryType, worldTotal, usaCount, displaySet);
    toggleMapDisplay(countryType);
    renderMap(stats, maxCount, countryType);
    renderSidebar(displaySet);
    renderSummaryTable(stats, displaySet.length, countryType);
}

function renderSidebar(cases) {
    const list = document.getElementById('litigation-list');
    const title = document.getElementById('list-title');
    const searchInput = document.getElementById('case-search');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    if (!list) return;
    
    // Filter by Search Query (Client-side)
    let displayCases = cases;
    if (query) {
        displayCases = cases.filter(c => {
            const name = (c.case_name || '').toLowerCase();
            const court = (c.court || '').toLowerCase();
            const status = (c.status || '').toLowerCase();
            const location = (c.location || '').toLowerCase();
            const country = (c.country || '').toLowerCase();
            return name.includes(query) || court.includes(query) || status.includes(query) || location.includes(query) || country.includes(query);
        });
    }

    list.innerHTML = "";
    if (title) title.textContent = `Case Details (${displayCases.length})`;

    if (displayCases.length === 0) {
        list.innerHTML = `<p class="empty-msg">${query ? 'No cases found for "' + query + '"' : 'No cases match the selected filters.'}</p>`;
        return;
    }

    // Performance optimization: Show first 100 items only
    displayCases.slice(0, 100).forEach((c, index) => {
        const item = document.createElement('div');
        item.className = 'case-item';
        item.style.animationDelay = `${index * 0.03}s`;
        
        item.innerHTML = `
            <div class="case-title">${c.case_name || 'Untitled Case'}</div>
            <div class="case-meta">
                <span class="meta-icon">📍</span> ${c.court || 'Unknown Court'}
                <span class="meta-sep">|</span>
                <span class="meta-status">${c.status || 'Status N/A'}</span>
            </div>
        `;
        item.onclick = () => showCaseDetail(c);
        list.appendChild(item);
    });
}

function extractCountry(countryText) {
    if (!countryText) return null;
    return COUNTRY_MAP[countryText] || null;
}

function extractState(courtText) {
    if (!courtText) return null;
    const upper = courtText.toUpperCase();
    
    // Priority: Long names first to avoid 'MA' matching 'MAINE' early
    const sortedStates = Object.entries(STATE_ABBR).sort((a, b) => b[0].length - a[0].length);
    
    for (const [fullName, abbr] of sortedStates) {
        if (upper.includes(fullName) || upper.includes(` ${abbr} `) || upper.includes(`, ${abbr}`)) {
            return abbr;
        }
    }
    return null;
}

function renderStats(total, selectedStatuses, selectedCountry, worldTotal, usaCount, currentCases) {
    const badgeContainer = document.getElementById('status-count-badges');
    const shareContainer = document.getElementById('share-info');
    const totalEl = document.querySelector('#status-display .total-count');
    
    if (totalEl) totalEl.textContent = total;
    
    if (shareContainer) {
        if (selectedCountry === 'USA' && worldTotal > 0) {
            const share = Math.round((usaCount / worldTotal) * 100);
            shareContainer.textContent = `미국건수/전세계건수 (점유율) = ${usaCount}/${worldTotal} (${share}%)`;
            shareContainer.style.display = 'block';
        } else {
            shareContainer.style.display = 'none';
        }
    }
    
    // Render Status-wise Badges in Sidebar
    if (badgeContainer && currentCases) {
        badgeContainer.innerHTML = '';
        
        // Count specific statuses found in the data
        const counts = {};
        currentCases.forEach(c => {
            const s = c.status || 'Unknown';
            let group = '기타';
            if (s.includes('준비')) group = '준비';
            else if (s.includes('시작')) group = '시작';
            else if (s.includes('1심')) group = '1심';
            else if (s.includes('2심')) group = '2심';
            else if (s.includes('항소')) group = '항소';
            else if (s.includes('판결')) group = '판결';
            else if (s.includes('종')) group = '종료/종결';
            
            counts[group] = (counts[group] || 0) + 1;
        });

        // Use standard display order
        const displayOrder = ['준비', '시작', '1심', '2심', '판결', '항소', '종료/종결'];
        displayOrder.forEach(label => {
            const count = counts[label] || 0;
            const badge = document.createElement('div');
            badge.className = `status-badge-item ${count > 0 ? 'active' : ''}`;
            badge.innerHTML = `
                <span class="label">${label}</span>
                <span class="count">${count}</span>
            `;
            badgeContainer.appendChild(badge);
        });
    }

    const chipsContainer = document.getElementById('active-status-chips');
    if (chipsContainer) {
        chipsContainer.innerHTML = "";
        selectedStatuses.forEach(s => {
            const chip = document.createElement('span');
            chip.className = 'status-chip';
            chip.textContent = (s === '종' || s === '종료' || s === '종결') ? '종료/종결' : s;
            chipsContainer.appendChild(chip);
        });
    }
}
function initLabels() {
    // This function is now just a fallback or convenience
    initUSLabels();
    initWorldLabels();
}


function initUSLabels() {
    const labelGroup = document.getElementById('state-labels');
    if (!labelGroup) return;
    labelGroup.innerHTML = '';
    
    const adjustments = {
        'FL': { dx: 2, dy: 1 }, 'MI': { dx: 1, dy: 2 }, 'LA': { dx: -1, dy: 0 },
        'CA': { dx: -1, dy: 0 }, 'AK': { dx: 0, dy: -2 }, 'HI': { dx: 0, dy: -2 },
        'NJ': { dx: 0, dy: 0 }, 'RI': { dx: 0, dy: 0 }, 'DE': { dx: 0, dy: 0 },
        'MD': { dx: 0, dy: 0 }, 'NH': { dx: 0, dy: 0 }, 'CT': { dx: 0, dy: 0 },
        'VT': { dx: 0, dy: 0 }, 'MA': { dx: 0, dy: 0 }, 'DC': { dx: 0, dy: 0 },
        'ME': { dx: 2, dy: 0 }
    };

    const SMALL_STATES = ['MA', 'CT', 'DE', 'DC', 'RI', 'NJ', 'MD'];

    const statePaths = new Map();

    document.querySelectorAll('#us-map .state-path').forEach(path => {
        const id = path.id;
        if (!id || id.length !== 2) return;
        
        const bbox = path.getBBox();
        const area = bbox.width * bbox.height;
        if (!statePaths.has(id) || area > statePaths.get(id).area) {
            statePaths.set(id, { bbox, area });
        }
    });


    statePaths.forEach((data, id) => {
        const { bbox } = data;
        let x = bbox.x + bbox.width / 2;
        let y = bbox.y + bbox.height / 2;
        
        if (adjustments[id]) {
            x += adjustments[id].dx;
            y += adjustments[id].dy;
        }

        createLabel(labelGroup, x, y, id, 'state-label', id);
    });
}

function initWorldLabels() {
    const labelGroup = document.getElementById('world-labels');
    if (!labelGroup) return;
    labelGroup.innerHTML = '';

    const countryPaths = new Map();

    document.querySelectorAll('#world-paths .state-path').forEach(el => {
        const id = el.id || el.parentElement.id;
        if (!id || id.length > 3) return;

        let bbox;
        try {
            bbox = el.getBBox();
        } catch(e) {
            bbox = { x: 0, y: 0, width: 0, height: 0 };
        }
        
        if (bbox.width === 0 && bbox.height === 0) return;

        const area = bbox.width * bbox.height;
        if (!countryPaths.has(id) || area > countryPaths.get(id).area) {
            countryPaths.set(id, { el, bbox, area });
        }
    });

    countryPaths.forEach((data, id) => {
        const { bbox } = data;
        const x = bbox.x + bbox.width / 2;
        const y = bbox.y + bbox.height / 2;
        const displayCode = (COUNTRY_LABEL_OVERRIDE[id] || id).toUpperCase();

        createLabel(labelGroup, x, y, id, 'state-label world-label', displayCode);
    });
}

function createLabel(group, x, y, id, className, textContent) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('class', className);
    text.setAttribute('data-loc', id);
    text.textContent = textContent;
    group.appendChild(text);
    return text;
}


function renderMap(stats, countryType) {
    const selector = countryType === 'USA' ? '#us-map .state-path' : '#world-map .state-path';
    const paths = document.querySelectorAll(selector);
    
    const counts = Object.values(stats).map(c => c.length);
    const maxCount = counts.length > 0 ? Math.max(...counts) : 1;

    paths.forEach(el => {
        const id = el.id || el.parentElement.id;
        const cases = stats[id] || [];
        
        const pathEl = el.tagName === 'path' ? el : el.querySelector('path');
        if (!pathEl) return;

        // Reset styles first
        pathEl.classList.remove('has-cases');
        pathEl.removeAttribute('data-count');
        pathEl.style.removeProperty('--intensity');

        const baseDisplayCode = (COUNTRY_LABEL_OVERRIDE[id] || id).toUpperCase();
        const fullName = FULL_NAMES[id];
        const displayInfo = fullName ? `${baseDisplayCode} (${fullName})` : baseDisplayCode;
        const labelElem = document.querySelector(`.state-label[data-loc="${id}"]`);
        
        // Tooltip should always show, even with 0 cases
        pathEl.onmouseover = (e) => showTooltip(e, `${displayInfo}: ${cases.length} litigation(s)`);
        pathEl.onmouseout = hideTooltip;

        if (cases.length > 0) {
            pathEl.classList.add('has-cases');
            pathEl.setAttribute('data-count', cases.length);
            
            // Logarithmic scale for better visual distribution
            const intensity = 0.3 + (0.7 * (Math.log(cases.length + 1) / Math.log(maxCount + 1)));
            pathEl.style.setProperty('--intensity', intensity);
            
            pathEl.onclick = () => showStateCasesModal(displayInfo, cases);

            if (labelElem) {
                labelElem.textContent = `${baseDisplayCode} (${cases.length})`;
                labelElem.classList.add('active-label');
            }
        } else {
            // Case where length is 0
            pathEl.onclick = () => showStateCasesModal(displayInfo, []);
            if (labelElem) {
                labelElem.textContent = baseDisplayCode;
                labelElem.classList.remove('active-label');
            }
        }
    });
}

function extractLocation(c, type) {
    if (type === 'USA') {
        return extractState(c.court);
    } else {
        return extractCountry(c.country);
    }
}

function toggleMapDisplay(country) {
    const usMap = document.getElementById('us-map');
    const worldMap = document.getElementById('world-map');
    if (country === 'USA') {
        if (usMap) usMap.style.display = 'block';
        if (worldMap) worldMap.style.display = 'none';
        initUSLabels();
        resetTransform(); 
    } else {
        if (usMap) usMap.style.display = 'none';
        if (worldMap) worldMap.style.display = 'block';
        initWorldLabels();
        resetTransform();
    }
}

function showStateCasesModal(locationName, cases) {
    const modal = document.getElementById('case-modal');
    const title = document.getElementById('modal-title');
    const list = document.getElementById('modal-case-list');

    title.textContent = `Litigation in ${locationName}`;
    list.innerHTML = "";
    
    cases.forEach(c => {
        const item = document.createElement('div');
        item.className = 'modal-item';
        item.innerHTML = `
            <strong>${c.case_name}</strong>
            <p>${c.court} | Status: ${c.status}</p>
        `;
        item.onclick = () => showCaseDetail(c);
        list.appendChild(item);
    });

    modal.style.display = 'flex';
}

function showCaseDetail(c) {
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');

    const firstUrl = c.url ? c.url.split(' ')[0] : '#';
    const isPreparing = c.status && c.status.includes("준비");
    
    content.innerHTML = `
        <div class="detail-header">
            <h3>${c.case_name}</h3>
            <span class="status-badge">${c.status}</span>
        </div>
        <div class="detail-grid">
            <div class="field"><span>Filed</span><strong>${c.file_date}</strong></div>
            <div class="field"><span>Court</span><strong>${c.court}</strong></div>
            <div class="field"><span>Plaintiff</span><strong>${c.plaintiff}</strong></div>
            <div class="field"><span>Defendant</span><strong>${c.defendant}</strong></div>
        </div>
        <div class="detail-summary">
            <h4>Summary</h4>
            <p>${c.summary || "No summary available."}</p>
        </div>
        <div class="detail-actions">
            ${isPreparing ? `
                <div class="warning-box animate-in">
                    <span class="warning-icon">⚠️</span>
                    <span>Complaint document has not yet been uploaded to CourtListener.</span>
                </div>
            ` : `
                <a href="${firstUrl}" target="_blank" class="btn-primary">View Docket on CourtListener</a>
            `}
            <button onclick="document.getElementById('detail-modal').style.display='none'" class="btn-secondary">Close</button>
        </div>
    `;
    modal.style.display = 'flex';
}

// Close modals when clicking outside
window.onclick = (e) => {
    if (e.target.className === 'modal-overlay') {
        e.target.style.display = 'none';
    }
};

function showTooltip(e, text) {
    const tt = document.getElementById('tooltip');
    if (!tt) return;
    tt.textContent = text;
    tt.style.display = 'block';
    tt.style.left = (e.pageX + 10) + 'px';
    tt.style.top = (e.pageY + 10) + 'px';
}

function hideTooltip() {
    const tt = document.getElementById('tooltip');
    if (tt) tt.style.display = 'none';
}

// Map Zoom and Pan Logic
let currentScale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

function initMapControls() {
    const viewport = document.getElementById('map-viewport');
    const wrapper = document.getElementById('map-svg-wrapper');
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');

    if (!viewport || !wrapper) return;

    // Zoom Buttons
    zoomIn.onclick = () => updateTransform(0.2);
    zoomOut.onclick = () => updateTransform(-0.2);
    zoomReset.onclick = resetTransform;

    // Wheel Zoom
    viewport.onwheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        updateTransform(delta);
    };

    // Panning
    viewport.onmousedown = (e) => {
        if (e.button !== 0) return; // Only left click
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        viewport.style.cursor = 'grabbing';
    };

    window.onmousemove = (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        applyTransform();
    };

    window.onmouseup = () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    };
}

function updateTransform(delta) {
    const newScale = Math.min(Math.max(currentScale + delta, 0.5), 5);
    if (newScale !== currentScale) {
        currentScale = newScale;
        applyTransform();
    }
}

function resetTransform() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
}

function applyTransform() {
    const wrapper = document.getElementById('map-svg-wrapper');
    if (wrapper) {
        wrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    }
}

// RESTORED SUMMARY TABLE AND CSV EXPORT Logic
function renderSummaryTable(stats, total, type) {
    const container = document.getElementById('map-summary-container');
    const wrapper = document.getElementById('stats-table-wrapper');
    const textSummary = document.getElementById('text-summary');
    const titleEl = document.getElementById('summary-title');
    const exportBtn = document.getElementById('export-csv-btn');

    if (!container || total === 0) {
        if (container) container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    if (titleEl) {
        titleEl.textContent = type === 'WORLD' ? '전세계 국가별 소송 현황' : '미국 주별 소송 현황';
    }

    // Sort stats
    const sorted = Object.entries(stats)
        .map(([loc, cases]) => ({
            loc,
            count: cases.length,
            share: ((cases.length / total) * 100).toFixed(1)
        }))
        .sort((a, b) => b.count - a.count);

    let html = `
        <table class="stats-table">
            <thead>
                <tr>
                    <th>${type === 'WORLD' ? '국가' : '주 (State)'}</th>
                    <th>소송 건수</th>
                    <th>비중 (%)</th>
                </tr>
            </thead>
            <tbody>
    `;

    sorted.forEach(item => {
        const locName = type === 'WORLD' ? (item.loc).toUpperCase() : item.loc;
        html += `
            <tr>
                <td>${locName}</td>
                <td><b>${item.count}</b></td>
                <td>${item.share}%</td>
            </tr>
        `;
    });

    html += `
            <tr class="total-row">
                <td>TOTAL</td>
                <td>${total}</td>
                <td>100%</td>
            </tr>
        </tbody>
    </table>`;

    if (wrapper) wrapper.innerHTML = html;

    // Generate textual summary
    let summaryText = "";
    if (type === 'WORLD') {
        const top3 = sorted.slice(0, 3).map(x => `${x.loc.toUpperCase()}(${x.count}건)`).join(", ");
        summaryText = `현재 전세계 총 <b>${total}건</b>의 소송이 집계되었습니다. `;
        if (top3) summaryText += `주요 소송 발생 국가는 <b>${top3}</b> 순입니다.`;
    } else {
        const top3 = sorted.slice(0, 3).map(x => `${x.loc}(${x.count}건)`).join(", ");
        summaryText = `현재 미국 내 총 <b>${total}건</b>의 소송이 집계되었습니다. `;
        if (top3) summaryText += `가장 많은 소송이 진행 중인 지역은 <b>${top3}</b> 등입니다.`;
    }
    
    if (textSummary) textSummary.innerHTML = summaryText;

    // Hook up export button
    if (exportBtn) {
        exportBtn.onclick = () => exportToCSV(sorted, total, type);
    }
}

function exportToCSV(data, total, type) {
    let csv = "\uFEFF"; // UTF-8 BOM for Excel
    csv += (type === 'WORLD' ? "Country" : "State") + ",Count,Share (%)\n";
    
    data.forEach(item => {
        const locName = type === 'WORLD' ? item.loc.toUpperCase() : item.loc;
        csv += `${locName},${item.count},${item.share}\n`;
    });
    
    csv += `TOTAL,${total},100\n`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    
    link.setAttribute("href", url);
    link.setAttribute("download", `litigation_report_${type.toLowerCase()}_${dateStr}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
