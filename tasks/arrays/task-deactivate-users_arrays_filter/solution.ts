function shouldBeDeactivated(accounts, daysThreshold = 14) {
  return accounts
    .filter(account => account.isActive && account.lastVisitDaysAgo > daysThreshold)
    .map(account => account.id);
}

const deactivateIds = shouldBeDeactivated(userAccounts);
console.log(deactivateIds);