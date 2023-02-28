module.exports = {
    format_date: (date) => {
      // This formats the date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // This formats large numbers with commas
      return parseInt(amount).toLocaleString();
    },
   
  };