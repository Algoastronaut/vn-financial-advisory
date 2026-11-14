// Centralised business information — update this file to reflect all verified details
export const BUSINESS = {
  name: 'VN Financial Advisory',
  tagline: 'Trust. Partnership. Growth.',
  advisor: {
    name: 'Vinay Singh',
    fullName: 'Mr. Vinay Singh',
    designation: 'Titanium Advisor', // Verify exact official designation before publishing
    company: 'ICICI Prudential Life Insurance',
    experience: {
      insurance: '10+ Years',
      mutualFunds: '5 Years',
    },
  },
  contact: {
    phone: '+91 96916 07779',
    phoneRaw: '919691607779',
    email: 'vnfinancialadvisory@gmail.com',
    whatsappMessage: encodeURIComponent('Hello Vinay ji, I visited the VN Financial Advisory website and would like to know more about your services.'),
    instagram: 'https://www.instagram.com/vnfinancialadvisory/',
    instagramHandle: '@vnfinancialadvisory',
  },
  hours: '10:00 AM – 8:00 PM',
  location: {
    city: 'Rewa',
    state: 'Madhya Pradesh',
    country: 'India',
    // address: '', // Confirm and add exact office address before publishing
  },
  // Regulatory details — confirm all numbers before publishing
  regulatory: {
    amfiArn: '[ARN — confirm before publishing]',
    // irdaiCode: '[IRDAI agent/intermediary code — confirm before publishing]',
    // sebiReg: '[SEBI registration — confirm and verify category before publishing]',
  },
  achievements: [
    {
      id: 'mdrt',
      title: '10-Time MDRT Qualifier',
      subtitle: 'Million Dollar Round Table',
      description: 'Qualified for MDRT — the premier international association of leading financial service professionals — ten times, demonstrating consistent excellence in client service.',
      icon: 'award',
    },
    {
      id: 'cot',
      title: 'Court of the Table',
      subtitle: 'MDRT Recognition',
      description: 'Achieved Court of the Table (COT) recognition, one of the highest distinctions within the MDRT community, reflecting exceptional commitment and performance.',
      icon: 'star',
    },
    {
      id: 'titanium',
      title: 'Titanium Advisor',
      subtitle: 'ICICI Prudential Life Insurance',
      description: 'Recognised as a Titanium Advisor by ICICI Prudential Life Insurance, reflecting sustained performance in serving clients with life insurance solutions.',
      icon: 'shield',
    },
    {
      id: 'icici-excellence',
      title: 'Award of Excellence',
      subtitle: 'ICICI Prudential Life Insurance – MDRT Qualification 2024',
      description: 'Presented the ICICI Prudential Life Insurance Award of Excellence for MDRT Qualification 2024, recognising outstanding professional achievement.',
      icon: 'trophy',
    },
  ],
}

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.contact.phoneRaw}?text=${BUSINESS.contact.whatsappMessage}`
