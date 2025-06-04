function getUserAccountsToDeactivate(accounts, daysThreshold = 14) {
  return accounts
    .filter(account => account.isActive && account.lastVisitDaysAgo > daysThreshold)
    .map(account => account.id);
}

const idsDeactivate = getUserAccountsToDeactivate(userAccounts);
console.log(idsDeactivate);