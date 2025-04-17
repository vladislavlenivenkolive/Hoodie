export async function getEntities() {
  const response = await fetch('http://localhost:5000/api/entities');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}
