export async function getEntities() {
  const response = await fetch('https://hoodie-api.azurewebsites.net/api/WeatherForecast');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}
