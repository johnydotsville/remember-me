TODO: сделать через set и замыкания задачу подписки и отписки.

Черновик кода:

```javascript
function createSubscriptionService() {
  const subscribers = new Set();
  const ids = new Set();

  return {
    subscribe(user) {
      if (ids.has(user.id)) return false;
      subscribers.add(user);
      ids.add(user.id);
      return true;
    },
    getSubscribers() {
      // Возвращаем новый Set (копию)
      return new Set(subscribers);
    }
  };
}
```

