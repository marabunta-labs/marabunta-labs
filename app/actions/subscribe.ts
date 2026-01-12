'use server'

export async function subscribeToKit(formData: FormData) {
  const email = formData.get('email')
  const apiKey = process.env.NEXT_PUBLIC_KIT_API_KEY
  const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID

  if (!email || !apiKey || !formId) {
    console.error("ERROR: Faltan datos de configuración en .env.local o email vacío");
    return { success: false, message: 'Configuración incompleta o email vacío.' }
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: email,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("Error devuelto por Kit:", data)
      return { success: false, message: data.message || 'Algo salió mal.' }
    }

    return { success: true, message: 'Subscribed!, Check your email to confirm.' }

  } catch (error) {
    console.error("ERROR DE CONEXIÓN:", error);
    return { success: false, message: 'Connection error.' }
  }
}