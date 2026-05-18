'use strict';
module.exports = {
  property: {
    address: "1483 Tilney Mews, Vancouver, BC V6P 0B1",
    address_simplified: "test_fixture",
    type: "townhouse",
    type_chinese: "联排别墅 Townhouse (Freehold Strata)",
    analysis_mode: "non_listed",
    asking_price: null,
    estimated_value: 1750000,
    estimated_value_display: "$1,680,000–$1,780,000",
    bc_assessment: { total: null, land: null, improvements: null },
    last_sold: { price: 1800000, date: "2025年2月 (1481 Tilney)" },
    initial_completion_price: { price: 1000000, price_display: "~$950,000–$1,050,000", year: 2012 },
    benchmark: { display: "$1,047,100 (Metro Vancouver联排, 2026年3月)" },
    price_vs_benchmark: "高出约60%–70%（Westside大面积联排正常范围）",
    strata_fee: 600, strata_fee_per_sqft: "0.30",
    size_sqft: 1977, bedrooms: 4, bathrooms: "4 (3全+1半)",
    year_built: 2012, developer: "Granville Westside Developments",
    building_name: "Granville Mews（35套联排社区）",
    construction_type: "木框架 3层联排", dom: null,
    extra_fields: {}
  },
  economic: {
    boc_rate: 2.25, fixed_rate_range: [3.8, 4.2], analysis_rate: 4.0,
    reference_price: 1750000,
    mortgage_scenarios: {
      down_20: { down_payment: 350000, loan_amount: 1400000, payments: { minus_half: 6975, current: 7359, plus_half: 7755 } },
      down_50: { down_payment: 875000, loan_amount: 875000, payments: { minus_half: 4359, current: 4599, plus_half: 4847 } }
    },
    gds_tds: {
      down_20: { mortgage_monthly: 7359, tax_monthly: 438, strata_or_insurance_monthly: 600, gds_total: 8397, gds_ratio_pct: 96.5, min_income_for_32pct: 314888 },
      down_50: { mortgage_monthly: 4599, tax_monthly: 438, strata_or_insurance_monthly: 600, gds_total: 5637, gds_ratio_pct: 64.8, min_income_for_32pct: 211388 }
    },
    analysis_text: `基于 Metro Vancouver 家庭收入中位数约 $105,000/年计算，20%首付情景下GDS高达96.5%，远超32%的贷方合格线。即使是50%首付情景，GDS仍高达64.8%。购买此物业需年收入至少$211,388（50%首付）至$314,888（20%首付），买家池压缩至Metro Vancouver收入分布的前5%–10%。

从中期视角看，美国对加拿大木材、钢铁、铝的关税推动建筑成本持续上涨，预计2028–2029年出现供应断崖，对现有二手联排构成中期正面支撑。`
  },
  demographics: {
    neighbourhood_name: "Marpole", municipality: "City of Vancouver",
    population_table: {
      census_pop_display: "Marpole: 约 24,600人 (2021)",
      growth_display: "增加约1,100人，增长率 4.7% (vs City of Vancouver 7.3%)",
      growth_classification: "stable",
      avg_household_size: 2.3, pct_with_children: 28, median_age: 41,
      dwelling_mix_display: "高层公寓 ~40% / 低层公寓 ~30% / 独立屋 ~20% / 联排 ~10%",
      major_development_display: "Marpole Community Plan / Cambie Corridor — 大量高密度项目在建/审批中"
    },
    rental_cashflow: {
      est_rent_display: "$3,800–$4,200",
      monthly_cost_20: 8397, monthly_cost_50: 5637,
      cashflow_20: -4397, cashflow_50: -1637
    },
    analysis_text: `Marpole/South Cambie 属于成熟稳定社区，过去五年增长率约4.7%，低于City of Vancouver的7.3%。该区域正处于Marpole Community Plan转型初期，沿Cambie走廊已批准多个高密度开发项目。

即使50%首付场景下仍产生约$1,400–$1,800/月负现金流。该物业的4卧格局是相对积极信号——中期若移民政策稳定，家庭型住房需求将释放。

中长期人口展望：短期（2026–2027）增长因联邦移民政策收紧而放缓，但中期Marpole规划转型将重启增长势头。`
  },
  policy_zoning: {
    toa_status_display: "否 — 距Canada Line Langara-49th Station约1.5–2.0km，不在TOA范围",
    bill44_display: "不直接适用 — 已建成Freehold Strata联排",
    dcc_display: "不适用 — Strata单元无DCC负担",
    rental_restrictions_display: "BC省已禁止Strata限制出租，可合法出租",
    dual_valuation_display: null,
    analysis_text: `1483 Tilney Mews属于Freehold Strata物业，不具备独立再开发条件。不在TOA区域内，不享受高密度开发许可加持，但也不受TOA区域大量新增供应的直接竞争。

Surrey-Langley SkyTrain corridor不影响此物业。DCCs不直接适用。STR禁令对联排影响有限。`
  },
  land_supply: {
    approval_speed_display: "Slow（慢速）— City of Vancouver 平均3–5年",
    supply_outlook_display: "供应受限 — 联排在South Cambie属稀缺产品，周边新增供应主要为公寓",
    analysis_text: `Marpole/South Cambie是Vancouver最活跃的规划转型走廊之一。关键项目包括Oakridge Park（~6,000套）和Cambie Corridor Plan Phase 3。这些项目主要以公寓为主，与联排形成互补而非直接竞争。

Granville Mews过去12个月仅2笔成交，挂牌密度<3%，业主持有意愿强。Vancouver的慢审批流程进一步限制新供应到达速度。结合2028–2029年供应断崖，中期价格轨迹倾向温和支撑至上行。`
  },
  cma: {
    snlr_pct: 12.6, snlr_assessment: "买方市场",
    segment_benchmark_price: 1047100, segment_benchmark_yoy: "–5.7% YoY",
    price_vs_benchmark: "$1,750,000 vs $1,047,100 (+67%)",
    price_vs_benchmark_assessment: "Vancouver Westside联排显著高于Metro均值",
    dom: null, dom_assessment: null,
    comps: [
      { address: "1481 Tilney Mews, Vancouver", sold_price: 1800000, sold_date: "2025-02", sqft: "~1,977", bed_bath: "4/4", price_per_sqft: 910, vs_subject: "+2.9%" },
      { address: "1461 Tilney Mews, Vancouver", sold_price: 1728000, sold_date: "2025-07", sqft: "~1,977", bed_bath: "4/4", price_per_sqft: 874, vs_subject: "–1.3%" }
    ],
    subject_row: { price: 1750000, sqft: "1,977", bed_bath: "4/4", price_per_sqft: 885 },
    five_year_trend: [
      { year: 2021, volume: "高", avg_price: 1500000, median_price: 1450000, median_psf: 733, yoy_price_change: "—", yoy_volume_change: "—", cycle_phase: "上升/高峰" },
      { year: 2022, volume: "中等", avg_price: 1650000, median_price: 1600000, median_psf: 809, yoy_price_change: "+10.3%", yoy_volume_change: "下降", cycle_phase: "高峰/回调" },
      { year: 2023, volume: "低", avg_price: 1580000, median_price: 1550000, median_psf: 784, yoy_price_change: "–3.1%", yoy_volume_change: "下降", cycle_phase: "回调" },
      { year: 2024, volume: "低", avg_price: 1600000, median_price: 1570000, median_psf: 794, yoy_price_change: "+1.3%", yoy_volume_change: "持平", cycle_phase: "筑底" },
      { year: 2025, volume: "低", avg_price: 1764000, median_price: 1764000, median_psf: 892, yoy_price_change: "+12.4%", yoy_volume_change: "持平", cycle_phase: "回升" }
    ],
    five_year_cumulative: "从约$1,450,000上升至约$1,750,000，累计约+20%",
    cagr_5yr: "约 3.5%–4.0%",
    peak_display: "~$1,800,000，发生于 2025年Q1",
    current_vs_peak: "从$1,800,000下调至~$1,750,000，跌幅约–2.8%",
    cycle_phase: "回调/筑底",
    comps_analysis_text: `标的物业推算$/sqft约$885，介于同楼盘两笔成交之间（$874–$910）。考虑到市场走弱趋势，当前市场价值可能略低于1461 Tilney的成交水平。`,
    trend_narrative: `South Cambie/Marpole区域联排经历了典型的Metro Vancouver周期：2021年COVID低利率推动价格攀升，2022年加息导致急转直下，2023年回调，2024年筑底。Granville Mews产品实际保持在峰值以上——主要得益于4卧大面积稀缺属性。`
  },
  transaction_activity: {
    snlr_display: "~12.6% — 买方市场",
    monthly_volume_display: "South Cambie联排月均约 2–4 套 (–15% 至 –25% vs 去年同期)",
    avg_dom_display: "约 30–57 天",
    absorption_display: "约 8–12 个月库存 — 买方优势",
    list_to_sale_display: "约 95%–97%",
    grade: "sluggish",
    analysis_text: `当前Vancouver Westside联排市场处于低迷状态。SNLR约12.6%处于买方市场门槛。吸纳率约8–12个月定义了买方优势窗口期。挂牌价成交比约95%–97%意味着3%–5%的议价空间。

Granville Mews仅35套，年均1–2笔成交。低流动性意味着出售需更长在市时间（60–90天），但当前挂牌竞争压力也较小。`
  },
  market_positioning: {
    summary_text: `Granville Mews于2012年竣工，定位为Vancouver Westside家庭升级型联排。原始完工成交价约$950,000–$1,050,000。从2012至今增值约75%–84%，CAGR约4.3%–4.7%。目标买家群体未发生根本转变。`,
    analysis_text: `Granville Mews由Granville Westside Developments开发，Formwerks Architectural设计，2012年竣工。定位于家庭升级型联排市场。

2012年背景：Canada Line刚通车约3年，Cambie走廊交通溢价快速兑现；BoC政策利率约1.0%推动旺盛购房需求。原始目标买家为从公寓升级到联排的年轻家庭。

当前物业仍处于原始定位核心甜蜜区——4卧联排在Westside依然是家庭升级首选。但2012年"新建"溢价已消退，竞争力转向"成熟社区+学区+轨交便利"的综合价值。`
  },
  resident_profile: {
    summary_text: `业主以高收入华裔家庭为主（年收入$150,000–$300,000+），投资者比例偏低（~15%–20%），自住率高。住户主要为有学龄儿童的双职工家庭。社区流转率极低，稳定性高。`,
    analysis_text: `Granville Mews作为35户Freehold Strata联排社区，呈现典型Vancouver Westside中上产家庭社区特征：

- **收入层级**: $150,000–$300,000+，住房成本门槛天然筛选高收入家庭
- **投资者比例**: ~15%–20%，4卧大面积产品负现金流大，不吸引纯投资持有
- **家庭类型**: 以有学龄儿童的双职工家庭为主，利用Churchill/Osler学区
- **文化构成**: 华裔人口比例较高（估计40%+）
- **流转特征**: 年均1–2笔成交，持有周期5–10年，社区稳定`
  },
  hyperlocal_premiums: {
    factors: [
      { factor: "轨交距离", assessment: "Canada Line Langara-49th约1.5–2.0km", premium: "中性 0%" },
      { factor: "学区", assessment: "Osler Elementary 8.4/10; Churchill Secondary ~6–7/10", premium: "+10%–15%" },
      { factor: "公园/绿地", assessment: "Ash Park、Shannon Park 步行可达", premium: "+2%–3%" },
      { factor: "噪音", assessment: "Granville Street交通噪音可能影响临街单元", premium: "–1%至–3%" },
      { factor: "朝向", assessment: "未确认", premium: "待定" },
      { factor: "社区规模", assessment: "35户小型联排社区", premium: "+2%–3%" }
    ],
    net_premium_display: "+10%至+18%",
    analysis_text: `超本地化溢价主要由学区驱动——Osler Elementary 8.4/10属Top Tier，在Vancouver Westside市场中是强有力的价值锚点。小型联排社区稀缺性进一步增强价格韧性。轨交距离中性是主要溢价缺失点。`
  },
  builder_reputation: {
    name: "Granville Westside Developments",
    tier: "C",
    analysis_text: `Granville Westside Developments不属于Metro Vancouver顶级知名开发商。市场认知度有限，公开项目组合较小。未发现显著负面投诉或诉讼——但缺少品牌溢价背书。

C级意味着应额外关注建筑质量和维护记录、过去12年重大维修或特别征收历史、以及新业主保修到期状况。价格中不应包含品牌溢价。`
  },
  school_catchment: {
    schools: [
      { name: "Sir William Osler Elementary", type: "公立小学", fraser_score: 8.4, premium: "+10%–20% (Top Tier)" },
      { name: "Sir Winston Churchill Secondary", type: "公立中学", fraser_score: 6.5, premium: "+5%–8% (Above Average)" }
    ],
    private_schools_nearby: "Crofton House、St. George's、York House等距离约3–8km",
    toa_double_premium: false,
    analysis_text: `Osler Elementary 8.4/10位列Vancouver公立小学前20%，对家庭型买家构成重要决策驱动。Top Tier小学学区通常带来10%–20%价格溢价。Churchill Secondary提供additional 5%–8%溢价叠加。综合学区溢价估计+12%–18%，是该物业价值支撑的核心锚点。`
  },
  holding_costs: {
    cost_table: {
      rate: 4.0, annual_tax: 5260, strata_per_sqft: "0.30",
      down_20: { down_payment: 350000, loan_amount: 1400000, mortgage_monthly: 7359, strata_monthly: 600, tax_monthly: 438, insurance_monthly: 100, total_monthly: 8497 },
      down_50: { down_payment: 875000, loan_amount: 875000, mortgage_monthly: 4599, strata_monthly: 600, tax_monthly: 438, insurance_monthly: 100, total_monthly: 5737 }
    },
    opportunity_cost_text: "额外30%首付资金$525,000按4%年回报率可产生约$21,000/年（$1,750/月）投资收入。增加首付节省的利息约$1,750/月，与投资回报基本持平。但50%首付的核心优势在于降低月度现金流压力和利率风险敞口。",
    strata_health: {
      rating: "low",
      analysis_text: `管理费$0.30/sqft显著低于正常区间（$0.60–$1.00）。可能反映高效运营或维护资金不足。14年楼龄木框架处于中期过渡阶段：保修已全部到期，屋顶和外墙防水膜15–20年需首次大修。2012年建造已采用post-leaky-condo标准，rainscreen风险较低。

买家必须审查：最新工程折旧报告（应有2022年版本）、CRF余额及年度拨款（需≥25%年运营预算）、近3年Strata会议纪要。`
    }
  },
  valuation: {
    mode_b: true,
    methodology_steps: [
      { step: "**基线 Baseline**", calculation: "同楼盘最近成交均值 ($1,800,000 + $1,728,000) ÷ 2 = **$1,764,000**" },
      { step: "**减**: 时间调整", calculation: "–$75,000 至 –$90,000" },
      { step: "**加**: 超本地化净溢价", calculation: "已含于成交基线中" },
      { step: "**减**: 宏观市场折扣 (SNLR 12.6%)", calculation: "–$53,000 至 –$88,000" },
      { step: "**加**: 稀缺性支撑", calculation: "+$20,000 至 +$40,000" },
      { step: "**减**: 开发商非知名、14年楼龄", calculation: "–$15,000 至 –$25,000" }
    ],
    range_display: "$1,680,000 – $1,780,000",
    one_sentence_rationale: "基于同楼盘两笔近期成交均值经时间折价调整，在买方市场中考虑3%–5%议价空间，同时4卧联排在Westside学区的稀缺性为价格底部提供支撑。",
    reality_check_text: "现实检验：(1) 1461 Tilney经9个月市场调整后约$1,650,000–$1,680,000；(2) South Cambie联排区域均值约$1,255,000–$1,576,000；(3) 本物业1,977sqft 4卧属大面积高端产品，理应高于区域均值。"
  },
  factor_summary: [
    { factor: "库存 / SNLR", signal: "12.6% — 买方市场", implication: "具备议价空间3%–5%" },
    { factor: "推算价值 vs 基准价", signal: "高于Metro联排基准67%", implication: "Westside大面积联排正常溢价" },
    { factor: "按揭月供 (20%首付)", signal: "约$7,359/月", implication: "GDS: 96.5% ⚠️ 严重不合格" },
    { factor: "按揭月供 (50%首付)", signal: "约$4,599/月", implication: "GDS: 64.8% ⚠️ 不合格" },
    { factor: "超本地化净溢价", signal: "+10%–18%", implication: "主要来源：学区+社区稀缺性" },
    { factor: "租金现金流", signal: "负 $1,437–$4,597/月", implication: "投资者严重负现金流" },
    { factor: "分区 / TOA", signal: "否", implication: "无开发溢价" },
    { factor: "开发商声誉", signal: "C级", implication: "中性；需额外尽职调查" },
    { factor: "学区评级", signal: "Osler 8.4/10", implication: "溢价~12%–18%" },
    { factor: "Strata健康", signal: "低至中风险", implication: "管理费偏低需验证CRF" },
    { factor: "交易活跃度", signal: "🔴 低迷", implication: "流动性受限" }
  ],
  tailwinds: [
    "🎓 **顶级学区锚定**: Osler Elementary 8.4/10 Top Tier，+12%–18%价格溢价",
    "🏠 **产品稀缺性**: 4卧1,977sqft联排在Westside属稀缺missing middle产品",
    "📉 **2028–2029供应断崖**: 关税推高建筑成本，中期减少新增供应",
    "🏗️ **Cambie走廊升级**: 基础设施和商业配套升级提升区域吸引力",
    "📊 **稳定CAGR**: 13年约4.3%–4.7%年化增值率"
  ],
  headwinds: [
    "💰 **极端收入门槛**: 50%首付仍需年收入$211,000+才GDS合格",
    "📉 **买方市场压力**: SNLR 12.6%，库存高于10年均值37%",
    "🏢 **负现金流**: 即使50%首付仍月亏$1,400–$1,800",
    "🔨 **中期维护**: 14年楼龄木框架即将进入大修周期",
    "🔴 **低流动性**: 年均仅1–2笔成交，出售周期60–90天+"
  ],
  overall_assessment: `1483 Tilney Mews是Vancouver Westside成熟学区内的稀缺4卧联排产品。学区优势（Osler 8.4/10）和联排产品稀缺性构成坚实价值锚点。当前处于明确买方市场周期（SNLR 12.6%），极端收入门槛限制合格买家池。对于自住买家，学区、面积和社区稳定性提供长期持有信心；对于投资者，持续负现金流使其不适合纯租金回报策略。中期供应断崖可能在2028–2029年提供上行支撑。`,
  key_questions: [
    "**请求Strata完整文档包**: Form B、工程折旧报告（2022年版本）、过去3年AGM会议纪要、CRF余额。关注是否有计划中的特别征收。",
    "**确认具体单元朝向**: 是否临Granville Street交通噪音？朝向影响±3%价值调整。",
    "**核实Churchill Secondary评分**: 如果低于6.0/10，学区综合溢价将收窄至10%–15%。",
    "**独立验房检查**: 14年楼龄+低管理费($0.30/sqft)，需评估外墙、屋顶、管道/HVAC系统。",
    "**探索挂前交易议价空间**: 非挂牌状态下直接与业主协商可能获得低于推算区间的价格优势。"
  ]
};
