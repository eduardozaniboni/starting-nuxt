export default defineEventHandler(async (event) => {
  const { data } = await $fetch<{ data: any }>(
    "https://api.currencyapi.com/v3/latest?apikey=OA66wWM6edtsgtkV0u6HjRtpKe0wYUjWTsQQnw65"
  );

  return data;
});
