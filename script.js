/**
 * DZ Predictions - محرك الجافاسكريبت العصري
 * الموجه لتشغيل الموقع بنسخة HTML/CSS/JS نقية بالكامل، متضمناً التحقق من الأكواد السنوية،
 * نسخ بيانات الدفع للجزائريين، والتحليلات الـ VIP التفصيلية الـ 14 المطلوبة بدقة بالغة.
 */

import { matchesData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. الأكواد السنوية الصالحة للتفعيل
  const validVipCodes = [
    "ATAI-1112-WQLQ",
    "FSKC-FQ19-TZOA",
    "TAI2-FSKD-FZID",
    "RAKS-48DA-HELS",
    "GSGA-319X-TOZL"
  ];

  // تتبع حالة التفعيل من الكوكيز أو التخزين المحلي لضمان دوام تفعيل العميل بعد تحديث الصفحة
  let isVipUnlocked = localStorage.getItem("vip_active_new") === "true";

  // تحديد العناصر من DOM
  const matchesContainer = document.getElementById("matches-container");
  const filterContainer = document.getElementById("filter-container");
  
  // لافتات الإحصائيات
  const totalMatchesCount = document.getElementById("total-matches-count");
  const vipMatchesCount = document.getElementById("vip-matches-count");
  const leaguesCount = document.getElementById("leagues-count");

  // قسم كود التفعيل VIP
  const activationInput = document.getElementById("activation-input");
  const activationSubmit = document.getElementById("activation-submit");
  const activationError = document.getElementById("activation-error");
  const activationSuccess = document.getElementById("activation-success");
  const activationBlock = document.getElementById("activation-block");

  // نافذة تيليجرام المنبثقة
  const telegramModal = document.getElementById("telegram-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const subChannelBtn = document.getElementById("sub-channel-btn");
  const viewPredictionBtn = document.getElementById("view-prediction-btn");
  const modalMatchTitle = document.getElementById("modal-match-title");

  // المتغيرات المؤقتة لتفاعلية التيليجرام والمباراة النشطة
  let activeMatchIdTemp = null;
  let telegramSubscribed = false;

  // 2. فحص وتحديث مظهر واجهة التفعيل بالصفحة
  function updateActivationUI() {
    if (isVipUnlocked) {
      if (activationBlock) {
        activationBlock.innerHTML = `
          <div style="text-align: center; padding: 20px 10px;">
            <div style="font-size: 40px; margin-bottom: 10px;">👑</div>
            <h3 style="color: #fbbf24; font-size: 20px; font-weight: 900; margin-bottom: 4px;">حسابك مفعل كـ VIP نشط مدى الحياة</h3>
            <p style="color: #10b981; font-weight: 800; font-size: 13.5px;">⭐ جميع ميزات التوقعات للأهداف، الكروت، الركنيات والنتائج الثنائية مفتوحة الآن لجميع مواجهات اليوم تلقائياً!</p>
          </div>
        `;
        activationBlock.style.border = "1px solid rgba(16, 185, 129, 0.4)";
        activationBlock.style.background = "linear-gradient(135deg, #060e14 0%, #0c1c16 100%)";
      }
    }
  }

  // 3. التحقق من الضغط على زر تفعيل الكود الخاص بي VIP
  if (activationSubmit) {
    activationSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      
      // إخفاء التنبيهات السابقة
      activationError.style.display = "none";
      activationSuccess.style.display = "none";

      const enteredCode = activationInput.value.trim().toUpperCase();

      if (!enteredCode) {
        activationError.innerText = "الرجاء إدخال كود التفعيل أولاً للتنشيط!";
        activationError.style.display = "block";
        return;
      }

      // التحقق من صلاحية الكود
      if (validVipCodes.includes(enteredCode)) {
        isVipUnlocked = true;
        localStorage.setItem("vip_active_new", "true");
        localStorage.setItem("activated_code_vip", enteredCode);
        
        activationSuccess.innerText = `🎉 ممتاز! تم تنشيط حساب الـ VIP الخاص بك بنجاح باستخدام الكود السنوي: ${enteredCode}`;
        activationSuccess.style.display = "block";
        activationInput.value = "";

        setTimeout(() => {
          updateActivationUI();
          initFilters(); // إعادة تشغيل الفلاتر والإحصائيات
          renderMatches("الكل"); // إعادة رندرة المباريات بالتفاصيل المفتوحة حديثاً
        }, 1500);

      } else {
        activationError.innerText = "❌ عذراً، كود التفعيل هذا غير صالح أو منتهي الصلاحية. يرجى مراجعة الدعم أو شراء كود سنوي صالح.";
        activationError.style.display = "block";
      }
    });
  }

  // 4. نسخ تفاصيل الدفع CCP / BaridiMob
  window.copyToClipboard = (elementId, btn) => {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span style="color: #10b981">✔ تم النسخ!</span>`;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 1500);
    }).catch(err => {
      console.error("أخفق نسخ النص: ", err);
    });
  };

  // 5. تهيئة أزرار تصفية الدوريات ديناميكياً
  function initFilters() {
    const leagues = ["الكل"];
    matchesData.forEach(match => {
      if (!leagues.includes(match.league)) {
        leagues.push(match.league);
      }
    });

    filterContainer.innerHTML = "";
    leagues.forEach((league, index) => {
      const btn = document.createElement("button");
      btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
      btn.innerText = league;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMatches(league);
      });
      filterContainer.appendChild(btn);
    });

    // تحديث لافتات الإحصائيات الفوقية
    if (totalMatchesCount) totalMatchesCount.innerText = matchesData.length;
    if (vipMatchesCount) {
      if (isVipUnlocked) {
        vipMatchesCount.innerText = "مفتوحة ✅";
        vipMatchesCount.style.color = "#10b981";
      } else {
        vipMatchesCount.innerText = matchesData.filter(m => m.isVip).length;
        vipMatchesCount.style.color = "#fbbf24";
      }
    }
    if (leaguesCount) leaguesCount.innerText = leagues.length - 1;
  }

  // 6. رندرة المباريات مقسمة لتواريخ ومفلترة بالدوري
  function renderMatches(selectedLeague = "الكل") {
    matchesContainer.innerHTML = "";

    const filtered = selectedLeague === "الكل" 
      ? matchesData 
      : matchesData.filter(m => m.league === selectedLeague);

    if (filtered.length === 0) {
      matchesContainer.innerHTML = `
        <div class="no-matches">
          <div class="no-matches-icon">⚽</div>
          <p>لا توجد مباريات مطابقة لهذا الدوري حالياً!</p>
        </div>
      `;
      return;
    }

    // تجميع حسب تواريخ الأيام كـ مفتاح
    const groups = {};
    filtered.forEach(match => {
      if (!groups[match.date]) {
        groups[match.date] = [];
      }
      groups[match.date].push(match);
    });

    // رسم هيكلية المباريات في DOM
    Object.keys(groups).forEach(date => {
      const dailyMatches = groups[date];

      const section = document.createElement("div");
      section.className = "date-section";

      const sectionHeader = document.createElement("div");
      sectionHeader.className = "date-header";
      sectionHeader.innerHTML = `
        <div class="date-header-icon"></div>
        <h3 class="date-title">${date}</h3>
        <span class="date-count">${dailyMatches.length} مباريات</span>
      `;
      section.appendChild(sectionHeader);

      dailyMatches.forEach(match => {
        const card = document.createElement("div");
        card.id = `match-card-${match.id}`;
        card.className = `match-card ${match.isVip ? 'vip-card' : ''} ${match.isCanceled ? 'is-canceled' : ''}`;

        let detailsInnerHtml = "";
        let bottomHintHtml = "";

        if (match.isCanceled) {
          bottomHintHtml = `
            <div class="expand-hint-text">
              <span class="canceled-text">❌ تم إلغاء هذه المباراة بقرار رسمي</span>
            </div>
          `;
          detailsInnerHtml = `
            <div class="match-details-expandable" style="display: none; text-align: center; padding: 10px;">
              <span class="canceled-text" style="font-weight: 800; font-size: 13px;">⚠️ المباراة ملغاة تكتيكياً ولن تُجرى في هذا التاريخ.</span>
            </div>
          `;
        } else if (match.isVip) {
          if (isVipUnlocked) {
            bottomHintHtml = `
              <div class="expand-hint-text">
                👑 توقعات VIP والـ 14 تفصيلاً مفتوحة! اضغط لعرضها والتحليل المباشر <span class="expand-icon-indicator">▼</span>
              </div>
            `;
            
            const vip = match.vipDetails || {};
            detailsInnerHtml = `
              <div class="match-details-expandable" style="display: none;">
                <div class="vip-details-panel">
                  <div class="vip-section-header">⭐ إحصائيات وتوقعات تكتيكية كاملة للـ VIP:</div>
                  
                  <!-- 1. أهداف الشوط الأول -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">⚽ توقع عدد أهداف الشوط الأول</span>
                    <span class="vip-row-value highlight-gold">${vip.goalsFirstHalf || 'هدَف (1)'}</span>
                  </div>

                  <!-- 2. أهداف الشوط الثاني -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">⚽ توقع عدد أهداف الشوط الثاني</span>
                    <span class="vip-row-value highlight-gold">${vip.goalsSecondHalf || 'هدفين (2)'}</span>
                  </div>

                  <!-- 3. نتيجة الشوط الأول -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">⏱️ شحال يكمل الشوط الأول</span>
                    <span class="vip-row-value">${vip.scoreFirstHalf || 'تعادل 0-0'}</span>
                  </div>

                  <!-- 4. نتيجة الشوط الثاني -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">⏱️ شحال يكمل الشوط الثاني</span>
                    <span class="vip-row-value">${vip.scoreSecondHalf || 'فوز أحد الطرفين'}</span>
                  </div>

                  <!-- 5. نتيجة الماتش كامل -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🏆 شحال يكمل الماتش كامل</span>
                    <span class="vip-row-value highlight-green">${vip.scoreFullTime || match.prediction}</span>
                  </div>

                  <!-- 6. بطاقة الشوط الأول -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🟨 شحال بطاقة في الشوط الأول</span>
                    <span class="vip-row-value">${vip.cardsFirstHalf || 'بطاقة واحدة'}</span>
                  </div>

                  <!-- 7. بطاقة الشوط الثاني -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🟨 شحال بطاقة في الشوط الثاني</span>
                    <span class="vip-row-value">${vip.cardsSecondHalf || 'بطاقتين (2)'}</span>
                  </div>

                  <!-- 8. بطاقات المباراة كاملة -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🟥 شحال بطاقات في المباراة كاملة</span>
                    <span class="vip-row-value highlight-blue">${vip.cardsFullTime || '3 بطاقات'}</span>
                  </div>

                  <!-- 9. ركنية الشوط الأول -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">📐 شحال ركنية في الشوط الأول</span>
                    <span class="vip-row-value">${vip.cornersFirstHalf || '3 ركنيات'}</span>
                  </div>

                  <!-- 10. ركنية الشوط الثاني -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">📐 شحال ركنية في الشوط الثاني</span>
                    <span class="vip-row-value">${vip.cornersSecondHalf || '4 ركنيات'}</span>
                  </div>

                  <!-- 11. ركنيات المباراة كاملة -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🚩 شحال ركنية في المباراة</span>
                    <span class="vip-row-value highlight-blue">${vip.cornersFullTime || '7 ركنيات'}</span>
                  </div>

                  <!-- 12. شكون يمركي الأول -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">👤 شكون يمركي الأول</span>
                    <span class="vip-row-value highlight-gold">${vip.firstToScore || 'غير محدد'}</span>
                  </div>

                  <!-- 13. شكون يربح -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🥇 شكون يربح المباراة</span>
                    <span class="vip-row-value highlight-green">${vip.winner || 'تعادل'}</span>
                  </div>

                  <!-- 14. فرصة مزدوجة -->
                  <div class="vip-field-row">
                    <span class="vip-row-label">🛡️ فرصة مزدوجة (فوز أحد الطرفين أو تعادل)</span>
                    <span class="vip-row-value highlight-blue">${vip.doubleChance || 'X2'}</span>
                  </div>

                  <!-- التحليل التقني المعمق -->
                  <div class="analysis-box">
                    <strong>التحليل الفني والمنطق الرياضي: 📊</strong> ${match.predictionDetails}
                  </div>
                </div>
              </div>
            `;
          } else {
            bottomHintHtml = `
              <div class="expand-hint-text">
                🔒 محمي بقفل ال الـ VIP السنوي. اضغط لمعرفة كيفية تفعيله والاشتراك <span class="expand-icon-indicator">▼</span>
              </div>
            `;
            detailsInnerHtml = `
              <div class="match-details-expandable" style="display: none;">
                <div class="vip-details-panel-locked">
                  <div style="font-size: 32px; margin-bottom: 10px;">👑</div>
                  <h4 style="color: var(--color-gold); font-size: 14.5px; font-weight: 800; margin-bottom: 6px;">هذه التوقعات والتحليلات الـ VIP الـ 14 مقفلة حالياً</h4>
                  <p style="color: var(--text-secondary); font-size: 12.5px; max-width: 450px; margin: 0 auto 15px auto; line-height: 1.5;">
                    أدخل الكود السنوي أو اشترك في إحدى الباقات اليومية/الأسبوعية/السنوية للحصول على وصول فوري إلى تحليلات الأهداف والبطاقات والركنيات لكل الشوطين وتحديد الفائزين!
                  </p>
                  <button class="action-btn btn-vip no-bubble" onclick="event.stopPropagation(); openVipPrompt(${match.id});">
                    عرض التوقعات VIP ⭐
                  </button>
                </div>
              </div>
            `;
          }
        } else {
          // مباريات مجانية
          bottomHintHtml = `
            <div class="expand-hint-text">
              ✨ مباراة مجانية! اضغط لعرض التحليل والتوقع الفوري <span class="expand-icon-indicator">▼</span>
            </div>
          `;
          detailsInnerHtml = `
            <div class="match-details-expandable" style="display: none;">
              <div class="free-details-panel">
                <div class="free-section-header">⚽ توقعات وتحليل اللقاء المجاني:</div>
                <div class="vip-field-row">
                  <span class="vip-row-label">🏆 التوقع الأساسي والمجاني</span>
                  <span class="vip-row-value highlight-green" style="font-size: 13.5px; font-weight: 900;">${match.prediction}</span>
                </div>
                <div class="analysis-box" style="margin-top: 10px;">
                  <strong>التحليل والمنطق الرياضي: 📊</strong> ${match.predictionDetails}
                </div>
              </div>
            </div>
          `;
        }

        card.innerHTML = `
          ${match.isVip ? '<span class="vip-badge">VIP حصري</span>' : ''}
          <div class="match-top">
            <span class="league-tag">⚽ ${match.league}</span>
            <span class="match-time">${match.time}</span>
          </div>
          
          <div class="match-body">
            <div class="team team-right">
              <span class="team-name">${match.team1.name}</span>
              <span class="team-flag">${match.team1.flag}</span>
            </div>
            
            <div class="match-vs">VS</div>
            
            <div class="team team-left">
              <span class="team-flag">${match.team2.flag}</span>
              <span class="team-name">${match.team2.name}</span>
            </div>
          </div>
          
          <div class="match-bottom" style="border-top: 1px solid rgba(255,255,255,0.03); padding-top: 10px; margin-top: 5px;">
            ${bottomHintHtml}
          </div>
          ${detailsInnerHtml}
        `;

        // إضافة حدث النقر على كارد المباراة بالكامل للتمدد والانكماش الذكي
        card.addEventListener("click", (e) => {
          // التجاهل عند الضغط على أزرار التفعيل أو أية أزرار تفاعلية داخل الكارد لمنع تكرار المودال والفقاعات
          if (e.target.closest("button") || e.target.closest(".no-bubble") || e.target.closest(".action-btn")) {
            return;
          }

          const expandable = card.querySelector(".match-details-expandable");
          if (expandable) {
            const isCurrentlyOpen = expandable.style.display === "block";
            
            // إغلاق أي كاردات أخرى مفتوحة لترتيب التوقعات رأسيًا (حسب رغبة المستخدم في جعل التوقعات مكدسة تحت بعضاها)
            document.querySelectorAll(".match-card").forEach(otherCard => {
              if (otherCard !== card) {
                const otherExpandable = otherCard.querySelector(".match-details-expandable");
                if (otherExpandable && otherExpandable.style.display === "block") {
                  otherExpandable.style.display = "none";
                  otherCard.classList.remove("is-expanded");
                  const otherIndicator = otherCard.querySelector(".expand-icon-indicator");
                  if (otherIndicator) {
                    otherIndicator.style.transform = "rotate(0deg)";
                    otherIndicator.style.color = "inherit";
                  }
                }
              }
            });

            if (isCurrentlyOpen) {
              expandable.style.display = "none";
              card.classList.remove("is-expanded");
              const indicator = card.querySelector(".expand-icon-indicator");
              if (indicator) {
                indicator.style.transform = "rotate(0deg)";
                indicator.style.color = "inherit";
              }
            } else {
              expandable.style.display = "block";
              card.classList.add("is-expanded");
              const indicator = card.querySelector(".expand-icon-indicator");
              if (indicator) {
                indicator.style.transform = "rotate(180deg)";
                indicator.style.color = "var(--color-green)";
              }
              // التمرير السلس للمباراة في جوالات المستخدمين لتركيز الرؤية الفورية
              setTimeout(() => {
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }, 100);
            }
          }
        });

        section.appendChild(card);
      });

      matchesContainer.appendChild(section);
    });
  }

  // 8. دالة فتح نافذة الـ VIP المنبثقة للتيليجرام / التنشيط
  window.openVipPrompt = (matchId) => {
    const match = matchesData.find(m => m.id === matchId);
    if (!match) return;

    activeMatchIdTemp = matchId;
    telegramSubscribed = false;

    // تهيئة حالة زر العرض للإغلاق وبطاقة خافتة
    viewPredictionBtn.classList.remove("step-2-btn");
    viewPredictionBtn.classList.add("btn-normal");
    viewPredictionBtn.style.opacity = "0.5";
    viewPredictionBtn.style.cursor = "not-allowed";

    if (modalMatchTitle) {
      modalMatchTitle.innerText = `فتح توقعات وتحليلات الـ VIP لمباراة: ${match.team1.name} ضد ${match.team2.name}`;
    }

    telegramModal.style.display = "flex";
  };

  // 9. الاشتراك بقناة تيليجرام (الخطوة الأولى)
  if (subChannelBtn) {
    subChannelBtn.addEventListener("click", () => {
      window.open("https://t.me/+ehjpXxVwbdVkZTc8", "_blank");
      
      telegramSubscribed = true;
      viewPredictionBtn.classList.remove("btn-normal");
      viewPredictionBtn.classList.add("step-2-btn");
      viewPredictionBtn.style.opacity = "1";
      viewPredictionBtn.style.cursor = "pointer";
    });
  }

  // 10. التوجه لعرض التوقع أو التواصل مع الدعم الفني بالتيليجرام (الخطوة الثانية)
  if (viewPredictionBtn) {
    viewPredictionBtn.addEventListener("click", (e) => {
      if (!telegramSubscribed) {
        e.preventDefault();
        alert("يرجى الاشتراك في القناة بالخطوة رقم 1 أولاً لتأكيد التفعيل!");
        return;
      }

      // توجيه المستخدم لحساب التليجرام الخاص بمطور المنصة "طلال" للحصول على الكود السنوي أو المساعدة
      window.open("https://t.me/talalblhrous05", "_blank");
      
      // إغلاق المنبثقة
      telegramModal.style.display = "none";
    });
  }

  // 11. إغلاق المنبثقة
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      telegramModal.style.display = "none";
    });
  }

  // النقر خارج المودال للإغلاق
  if (telegramModal) {
    telegramModal.addEventListener("click", (e) => {
      if (e.target === telegramModal) {
        telegramModal.style.display = "none";
      }
    });
  }

  // 12. انطلاق دورات التهيئة الأساسية في الصفحة
  updateActivationUI();
  initFilters();
  renderMatches("الكل");
});
