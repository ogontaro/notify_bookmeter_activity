import BookmeterNotifier from './bookmeter_notifier';

module.exports.notify_bookmeter_activity = (event) => {
  const BookmeterNotifier = new BookmeterNotifier();

  try {
    BookmeterNotifier.notify();
  } catch (err) {
    console.error(err);
  }
};
