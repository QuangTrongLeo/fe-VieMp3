import apiAIUrls from '~/api/urls/apiAIs';
import axios from 'axios';

// ===== CHAT AI =====
export async function apiChatAI(message) {
  try {
    const response = await axios.post(apiAIUrls.chatAI, {
      message: message,
    });
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi chat AI:', error);
    throw error;
  }
}
