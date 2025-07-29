const companyPrototype = {
  get revenue() {
    console.log("[Лог] Кто-то запросил revenue!");
    return 1_000_000;
  },
  _baseSecret: "PROTOTYPE_CONFIDENTIAL"
};

const companyData = Object.create(companyPrototype);
companyData.name = "ООО Мегатек";
companyData.legalId = "1234567890";
companyData._internal = "LOCAL_CONFIDENTIAL";

function hasRevenue(obj) {
  // Ваша реализация
}

hasRevenue(companyData);