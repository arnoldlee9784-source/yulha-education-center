
import { GoogleGenAI } from "@google/genai";

export async function askEducationAI(query: string): Promise<string> {
  // process 객체가 안전하게 존재하는지 확인 후 API 키 추출
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : "";
  
  if (!apiKey) {
    console.warn("API_KEY is not configured.");
    return "현재 상담 서비스 설정이 완료되지 않았습니다. 교육원으로 직접 문의 부탁드립니다.";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `당신은 율하평생교육원의 AI 상담원입니다. 
      우리 교육원은 입양, 양육비, 개인정보보호, 토지보상, 학교폭력 예방, MZ세대 소통 등을 전문적으로 교육합니다.
      실제 사례 위주의 교육을 강조합니다.
      
      질문: ${query}
      
      위 질문에 대해 친절하고 전문적으로 답변해 주세요. 율하평생교육원의 가치관을 담아주세요.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    return response.text || "죄송합니다. 답변을 생성하지 못했습니다. 교육원으로 직접 문의 부탁드립니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 상담 서비스가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.";
  }
}
