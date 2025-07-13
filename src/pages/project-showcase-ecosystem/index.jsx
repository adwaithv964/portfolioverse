import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProjectHero from './components/ProjectHero';
import ProjectFilter from './components/ProjectFilter';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import RelatedProjects from './components/RelatedProjects';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProjectShowcaseEcosystem = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredProject, setFeaturedProject] = useState(null);

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution Platform",
      category: "Web Application",
      description: "A comprehensive e-commerce solution with AI-powered recommendations and real-time inventory management.",
      fullDescription: `This project revolutionized online shopping by integrating advanced AI algorithms for personalized product recommendations, real-time inventory tracking, and seamless payment processing. The platform handles over 10,000 concurrent users and processes thousands of transactions daily.\n\nThe challenge was to create a scalable, user-friendly platform that could compete with industry giants while providing unique features that set it apart. We implemented machine learning algorithms for product recommendations, advanced search capabilities, and a streamlined checkout process.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redis"],
      year: "2024",
      duration: "8 months",
      teamSize: "6 developers",
      featured: true,
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      timeline: "Jan 2024 - Aug 2024",
      metrics: {
        improvement: "+340%",
        metric: "Conversion Rate",
        value: "340%"
      },
      features: [
        "AI-powered product recommendations",
        "Real-time inventory management",
        "Advanced search and filtering",
        "Multi-payment gateway integration",
        "Mobile-responsive design",
        "Admin dashboard with analytics"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "Research & Planning",
          description: "Conducted market research and user interviews to understand pain points in existing e-commerce platforms.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop"
        },
        {
          title: "Design & Prototyping",
          description: "Created wireframes and interactive prototypes to validate user experience and interface design.",
          image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=300&fit=crop"
        },
        {
          title: "Development & Testing",
          description: "Built the platform using modern technologies with comprehensive testing and quality assurance.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop"
        },
        {
          title: "Launch & Optimization",
          description: "Deployed the platform and continuously optimized based on user feedback and analytics.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "TrendingUp", value: "+340%", label: "Conversion Rate" },
        { icon: "Users", value: "50K+", label: "Active Users" },
        { icon: "DollarSign", value: "$2.5M", label: "Revenue Generated" },
        { icon: "Clock", value: "2.3s", label: "Page Load Time" },
        { icon: "Star", value: "4.9/5", label: "User Rating" },
        { icon: "ShoppingCart", value: "95%", label: "Cart Completion" }
      ],
      testimonial: {
        quote: "This platform transformed our business completely. The AI recommendations alone increased our sales by 340%. The team delivered beyond our expectations.",
        author: "Sarah Johnson",
        role: "CEO, TechMart",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      architecture: "Microservices architecture with React frontend, Node.js backend, MongoDB database, Redis caching, and AWS cloud infrastructure for scalability and reliability.",
      codeSnippet: `// AI Recommendation Engine
const getRecommendations = async (userId, productId) => {
  const userHistory = await getUserPurchaseHistory(userId);
  const similarUsers = await findSimilarUsers(userHistory);
  const recommendations = await ml.generateRecommendations({
    userId,
    productId,
    similarUsers,
    algorithm: 'collaborative-filtering'
  });
  return recommendations;
};`,
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
      backend: ["Node.js", "Express", "MongoDB", "Redis", "AWS Lambda", "Stripe API"],
      lastUpdated: "December 2024"
    },
    {
      id: 2,
      title: "HealthTech Mobile Application",
      category: "Mobile App",
      description: "A comprehensive health monitoring app with telemedicine capabilities and AI-powered health insights.",
      fullDescription: `A revolutionary mobile health application that connects patients with healthcare providers through secure telemedicine features. The app includes real-time health monitoring, medication reminders, and AI-powered health insights based on user data.\n\nThe main challenge was ensuring HIPAA compliance while creating an intuitive user experience. We implemented end-to-end encryption, secure authentication, and real-time video consultations.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "TensorFlow", "HIPAA"],
      year: "2024",
      duration: "10 months",
      teamSize: "8 developers",
      featured: false,
      liveUrl: "https://healthtech-app.com",
      githubUrl: "https://github.com/example/healthtech",
      timeline: "Mar 2024 - Dec 2024",
      metrics: {
        improvement: "+250%",
        metric: "Patient Engagement",
        value: "250%"
      },
      features: [
        "Telemedicine video consultations",
        "Health data tracking and analytics",
        "Medication reminders and tracking",
        "AI-powered health insights",
        "Secure messaging with providers",
        "Emergency contact integration"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "Healthcare Research",
          description: "Extensive research into healthcare regulations, HIPAA compliance, and user needs in digital health.",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop"
        },
        {
          title: "Security Implementation",
          description: "Implemented robust security measures including end-to-end encryption and secure authentication.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop"
        },
        {
          title: "AI Integration",
          description: "Developed machine learning models for health insights and predictive analytics.",
          image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=300&fit=crop"
        },
        {
          title: "Clinical Testing",
          description: "Conducted extensive testing with healthcare providers and patients for validation.",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "Users", value: "25K+", label: "Active Patients" },
        { icon: "Video", value: "10K+", label: "Consultations" },
        { icon: "Clock", value: "24/7", label: "Availability" },
        { icon: "Shield", value: "100%", label: "HIPAA Compliant" },
        { icon: "Star", value: "4.8/5", label: "App Store Rating" },
        { icon: "TrendingUp", value: "+250%", label: "Engagement" }
      ],
      testimonial: {
        quote: "This app has revolutionized how we connect with our patients. The telemedicine features are seamless and the security measures give us complete confidence.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer, HealthFirst",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      architecture: "React Native mobile app with Firebase backend, WebRTC for video calls, TensorFlow for AI insights, and comprehensive security layers for HIPAA compliance.",
      codeSnippet: `// Secure Health Data Encryption
const encryptHealthData = async (data, patientId) => {
  const encryptionKey = await getPatientEncryptionKey(patientId);
  const encryptedData = await crypto.encrypt(data, encryptionKey);
  return {
    data: encryptedData,
    timestamp: new Date().toISOString(),
    checksum: generateChecksum(encryptedData)
  };
};`,
      frontend: ["React Native", "TypeScript", "Native Base", "React Navigation", "Redux Toolkit"],
      backend: ["Firebase", "Cloud Functions", "WebRTC", "TensorFlow", "HIPAA Vault"],
      lastUpdated: "December 2024"
    },
    {
      id: 3,
      title: "FinTech Dashboard Analytics",
      category: "Dashboard",
      description: "Real-time financial analytics dashboard with advanced data visualization and predictive modeling.",
      fullDescription: `A sophisticated financial analytics platform that provides real-time market data, portfolio analysis, and predictive modeling for investment decisions. The dashboard processes millions of data points daily and provides actionable insights through advanced visualizations.\n\nThe challenge was to create a system that could handle massive amounts of financial data in real-time while providing intuitive visualizations that help users make informed investment decisions.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      year: "2023",
      duration: "12 months",
      teamSize: "10 developers",
      featured: true,
      liveUrl: "https://fintech-dashboard.com",
      githubUrl: "https://github.com/example/fintech",
      timeline: "Jan 2023 - Dec 2023",
      metrics: {
        improvement: "+180%",
        metric: "Trading Efficiency",
        value: "180%"
      },
      features: [
        "Real-time market data streaming",
        "Advanced charting and visualization",
        "Portfolio performance analytics",
        "Risk assessment algorithms",
        "Predictive modeling and forecasting",
        "Custom alert and notification system"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "Financial Analysis",
          description: "Deep dive into financial markets and trading patterns to understand user requirements.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
        },
        {
          title: "Data Architecture",
          description: "Designed scalable data pipeline to handle millions of real-time financial data points.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
        },
        {
          title: "Visualization Development",
          description: "Created interactive charts and dashboards using D3.js for complex financial data.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop"
        },
        {
          title: "Algorithm Implementation",
          description: "Developed predictive models and risk assessment algorithms for investment insights.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "TrendingUp", value: "+180%", label: "Trading Efficiency" },
        { icon: "BarChart3", value: "1M+", label: "Data Points/Day" },
        { icon: "Clock", value: "<100ms", label: "Response Time" },
        { icon: "Users", value: "5K+", label: "Active Traders" },
        { icon: "DollarSign", value: "$50M+", label: "Assets Managed" },
        { icon: "Target", value: "94%", label: "Prediction Accuracy" }
      ],
      testimonial: {
        quote: "The analytics and insights provided by this dashboard have significantly improved our trading strategies. The real-time data processing is incredibly fast and reliable.",
        author: "Robert Williams",
        role: "Portfolio Manager, InvestCorp",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      architecture: "Microservices architecture with Vue.js frontend, Python backend for data processing, PostgreSQL for data storage, and Kubernetes for container orchestration.",
      codeSnippet: `// Real-time Data Processing Pipeline
const processMarketData = async (marketStream) => {
  const pipeline = new DataPipeline();
  
  return pipeline
    .filter(data => data.volume > threshold)
    .transform(normalizeMarketData)
    .aggregate(calculateMovingAverages)
    .predict(runPredictiveModel)
    .stream(broadcastToClients);
};`,
      frontend: ["Vue.js 3", "TypeScript", "D3.js", "Vuetify", "Pinia"],
      backend: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      lastUpdated: "November 2024"
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      category: "Web Application",
      description: "Interactive online learning platform with AI-powered personalized learning paths and real-time collaboration.",
      fullDescription: `An innovative educational technology platform that personalizes learning experiences through AI algorithms. The platform includes interactive courses, real-time collaboration tools, progress tracking, and adaptive learning paths that adjust based on student performance.\n\nThe main challenge was creating an engaging learning environment that could adapt to different learning styles while maintaining high performance across various devices and network conditions.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io", "TensorFlow", "AWS"],
      year: "2023",
      duration: "14 months",
      teamSize: "12 developers",
      featured: false,
      liveUrl: "https://edtech-platform.com",
      githubUrl: "https://github.com/example/edtech",
      timeline: "Sep 2022 - Oct 2023",
      metrics: {
        improvement: "+220%",
        metric: "Learning Retention",
        value: "220%"
      },
      features: [
        "AI-powered personalized learning paths",
        "Interactive video lessons and quizzes",
        "Real-time collaboration and discussion",
        "Progress tracking and analytics",
        "Mobile-responsive design",
        "Offline content access"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "Educational Research",
          description: "Studied learning methodologies and educational psychology to design effective learning experiences.",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop"
        },
        {
          title: "AI Algorithm Development",
          description: "Created machine learning models for personalized learning path recommendations.",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=300&fit=crop"
        },
        {
          title: "Interactive Content Creation",
          description: "Developed interactive learning modules with multimedia content and assessments.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
        },
        {
          title: "User Testing & Optimization",
          description: "Conducted extensive testing with students and educators to optimize the learning experience.",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "Users", value: "100K+", label: "Students" },
        { icon: "BookOpen", value: "500+", label: "Courses" },
        { icon: "TrendingUp", value: "+220%", label: "Retention Rate" },
        { icon: "Clock", value: "85%", label: "Completion Rate" },
        { icon: "Star", value: "4.7/5", label: "Student Rating" },
        { icon: "Globe", value: "50+", label: "Countries" }
      ],
      testimonial: {
        quote: "This platform has transformed how our students learn. The personalized approach and interactive content have significantly improved engagement and outcomes.",
        author: "Dr. Emily Rodriguez",
        role: "Dean of Education, TechUniversity",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      architecture: "Angular frontend with Node.js backend, MongoDB for data storage, Socket.io for real-time features, and TensorFlow for AI-powered recommendations.",
      codeSnippet: `// Adaptive Learning Algorithm
const generateLearningPath = async (studentId, courseId) => {
  const studentProfile = await getStudentProfile(studentId);
  const learningStyle = await analyzeLearningStyle(studentProfile);
  const courseContent = await getCourseContent(courseId);
  
  return ai.generatePath({
    content: courseContent,
    style: learningStyle,
    difficulty: studentProfile.currentLevel,
    preferences: studentProfile.preferences
  });
};`,
      frontend: ["Angular 15", "TypeScript", "Angular Material", "RxJS", "NgRx"],
      backend: ["Node.js", "Express", "MongoDB", "Socket.io", "TensorFlow.js", "AWS"],
      lastUpdated: "October 2024"
    },
    {
      id: 5,
      title: "Smart IoT Home Automation",
      category: "IoT Application",
      description: "Comprehensive smart home automation system with voice control, energy monitoring, and predictive maintenance.",
      fullDescription: `A cutting-edge IoT platform that transforms regular homes into intelligent, energy-efficient smart homes. The system integrates various IoT devices, provides voice control capabilities, monitors energy consumption, and uses predictive analytics for maintenance scheduling.\n\nThe challenge was creating a unified platform that could communicate with diverse IoT devices while ensuring security, reliability, and user-friendly control interfaces.`,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      technologies: ["React", "Python", "MQTT", "InfluxDB", "Raspberry Pi", "TensorFlow"],
      year: "2024",
      duration: "6 months",
      teamSize: "5 developers",
      featured: false,
      liveUrl: "https://smart-home-iot.com",
      githubUrl: "https://github.com/example/smart-home",
      timeline: "Jun 2024 - Nov 2024",
      metrics: {
        improvement: "+45%",
        metric: "Energy Efficiency",
        value: "45%"
      },
      features: [
        "Multi-device IoT integration",
        "Voice control and automation",
        "Energy consumption monitoring",
        "Predictive maintenance alerts",
        "Security and surveillance integration",
        "Mobile app for remote control"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "IoT Device Research",
          description: "Analyzed various IoT protocols and devices to ensure compatibility and optimal performance.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop"
        },
        {
          title: "Protocol Implementation",
          description: "Implemented MQTT and other IoT protocols for reliable device communication.",
          image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=300&fit=crop"
        },
        {
          title: "AI Integration",
          description: "Developed machine learning models for predictive maintenance and energy optimization.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop"
        },
        {
          title: "User Interface Design",
          description: "Created intuitive mobile and web interfaces for seamless smart home control.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "Zap", value: "+45%", label: "Energy Savings" },
        { icon: "Wifi", value: "50+", label: "Connected Devices" },
        { icon: "Shield", value: "99.9%", label: "Uptime" },
        { icon: "Clock", value: "24/7", label: "Monitoring" },
        { icon: "Smartphone", value: "iOS/Android", label: "Mobile Support" },
        { icon: "Mic", value: "Voice", label: "Control Ready" }
      ],
      testimonial: {
        quote: "Our energy bills have decreased significantly since installing this system. The predictive maintenance feature has saved us from several potential issues.",
        author: "Mark Thompson",
        role: "Homeowner",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg"
      },
      architecture: "React-based dashboard with Python backend, MQTT for IoT communication, InfluxDB for time-series data, and edge computing with Raspberry Pi devices.",
      codeSnippet: `// IoT Device Communication
const connectDevice = async (deviceId, protocol) => {
  const client = mqtt.connect(brokerUrl);
  
  client.on('connect', () => {
    client.subscribe(\`devices/\${deviceId}/status\`);
    client.subscribe(\`devices/\${deviceId}/data\`);
  });
  
  client.on('message', (topic, message) => {
    processDeviceData(deviceId, JSON.parse(message));
  });
};`,
      frontend: ["React 18", "TypeScript", "Material-UI", "Chart.js", "PWA"],
      backend: ["Python", "FastAPI", "MQTT", "InfluxDB", "TensorFlow", "Raspberry Pi"],
      lastUpdated: "November 2024"
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      category: "Analytics Platform",
      description: "Advanced social media analytics platform with sentiment analysis, trend prediction, and competitor insights.",
      fullDescription: `A comprehensive social media analytics platform that provides deep insights into social media performance, audience engagement, sentiment analysis, and competitive intelligence. The platform processes millions of social media posts daily to provide actionable insights for brands and marketers.\n\nThe challenge was to create a system that could handle massive amounts of social media data in real-time while providing meaningful insights through advanced natural language processing and machine learning algorithms.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
      technologies: ["Next.js", "Python", "Elasticsearch", "Kafka", "TensorFlow", "Docker"],
      year: "2023",
      duration: "9 months",
      teamSize: "7 developers",
      featured: false,
      liveUrl: "https://social-analytics.com",
      githubUrl: "https://github.com/example/social-analytics",
      timeline: "Apr 2023 - Dec 2023",
      metrics: {
        improvement: "+300%",
        metric: "Insight Accuracy",
        value: "300%"
      },
      features: [
        "Real-time social media monitoring",
        "Sentiment analysis and emotion detection",
        "Trend prediction and forecasting",
        "Competitor analysis and benchmarking",
        "Automated reporting and alerts",
        "Multi-platform integration"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      processSteps: [
        {
          title: "Social Media API Integration",
          description: "Integrated with major social media platforms to collect and process real-time data streams.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop"
        },
        {
          title: "NLP Model Development",
          description: "Developed natural language processing models for sentiment analysis and content categorization.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
        },
        {
          title: "Analytics Dashboard",
          description: "Created comprehensive dashboards with real-time visualizations and interactive reports.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
        },
        {
          title: "Performance Optimization",
          description: "Optimized data processing pipelines to handle millions of social media posts efficiently.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop"
        }
      ],
      results: [
        { icon: "BarChart3", value: "10M+", label: "Posts Analyzed" },
        { icon: "TrendingUp", value: "+300%", label: "Insight Accuracy" },
        { icon: "Users", value: "1K+", label: "Brands Served" },
        { icon: "Clock", value: "Real-time", label: "Data Processing" },
        { icon: "Target", value: "92%", label: "Sentiment Accuracy" },
        { icon: "Globe", value: "25+", label: "Languages" }
      ],
      testimonial: {
        quote: "This platform has revolutionized our social media strategy. The insights are incredibly accurate and have helped us increase engagement by 300%.",
        author: "Lisa Chen",
        role: "Marketing Director, BrandCorp",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      architecture: "Next.js frontend with Python backend for data processing, Elasticsearch for search and analytics, Kafka for real-time data streaming, and containerized deployment.",
      codeSnippet: `// Sentiment Analysis Pipeline
const analyzeSentiment = async (socialPosts) => {
  const preprocessed = await nlp.preprocess(socialPosts);
  const sentiments = await model.predict(preprocessed);
  
  return sentiments.map((sentiment, index) => ({
    postId: socialPosts[index].id,
    sentiment: sentiment.label,
    confidence: sentiment.score,
    emotions: sentiment.emotions,
    keywords: extractKeywords(socialPosts[index].text)
  }));
};`,
      frontend: ["Next.js 13", "TypeScript", "Recharts", "Tailwind CSS", "React Query"],
      backend: ["Python", "FastAPI", "Elasticsearch", "Kafka", "TensorFlow", "Docker"],
      lastUpdated: "December 2024"
    }
  ];

  // Mock data for categories and technologies
  const categories = [
    { value: 'web-application', label: 'Web Application', count: 3 },
    { value: 'mobile-app', label: 'Mobile App', count: 1 },
    { value: 'dashboard', label: 'Dashboard', count: 1 },
    { value: 'iot-application', label: 'IoT Application', count: 1 },
    { value: 'analytics-platform', label: 'Analytics Platform', count: 1 }
  ];

  const technologies = [
    { value: 'react', label: 'React', count: 3 },
    { value: 'node-js', label: 'Node.js', count: 3 },
    { value: 'python', label: 'Python', count: 3 },
    { value: 'mongodb', label: 'MongoDB', count: 2 },
    { value: 'tensorflow', label: 'TensorFlow', count: 4 },
    { value: 'aws', label: 'AWS', count: 2 }
  ];

  // Set featured project on component mount
  useEffect(() => {
    const featured = projects.find(p => p.featured) || projects[0];
    setFeaturedProject(featured);
  }, []);

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category.toLowerCase().replace(/\s+/g,'-') === selectedCategory;
    
    const technologyMatch = selectedTechnology === 'all' || 
      project.technologies.some(tech => 
        tech.toLowerCase().replace(/\s+/g, '-').replace('.', '') === selectedTechnology
      );
    
    return categoryMatch && technologyMatch;
  });

  // Get related projects (excluding current featured project)
  const relatedProjects = projects
    .filter(p => p.id !== featuredProject?.id)
    .slice(0, 3);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTechnology('all');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleViewLive = () => {
    if (featuredProject?.liveUrl) {
      window.open(featuredProject.liveUrl, '_blank');
    }
  };

  const handleViewCode = () => {
    if (featuredProject?.githubUrl) {
      window.open(featuredProject.githubUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Showcase Ecosystem - PortfolioVerse</title>
        <meta name="description" content="Explore our comprehensive project portfolio featuring innovative web applications, mobile apps, and cutting-edge technology solutions with detailed case studies and interactive demonstrations." />
        <meta name="keywords" content="portfolio, projects, web development, mobile apps, case studies, technology solutions" />
      </Helmet>

      <Header />

      {/* Featured Project Hero */}
      {featuredProject && (
        <ProjectHero
          project={featuredProject}
          onViewLive={handleViewLive}
          onViewCode={handleViewCode}
        />
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Project Universe
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Dive deep into our comprehensive project portfolio featuring detailed case studies, 
            interactive prototypes, and measurable results across various industries and technologies.
          </p>
        </div>

        {/* Project Filter */}
        <div className="mb-12">
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            selectedCategory={selectedCategory}
            selectedTechnology={selectedTechnology}
            onCategoryChange={handleCategoryChange}
            onTechnologyChange={handleTechnologyChange}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects.length}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleProjectSelect}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Search" size={32} color="var(--color-text-secondary)" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No Projects Found
            </h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your filters to see more projects.
            </p>
            <Button
              variant="outline"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to bring your vision to life with cutting-edge technology and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <RelatedProjects
        projects={relatedProjects}
        onProjectSelect={handleProjectSelect}
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default ProjectShowcaseEcosystem;