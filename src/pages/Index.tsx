import Header from '@/components/Header';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Chrome, Clock, Download, Github, Globe, Lock, Shield, Target, Zap } from "lucide-react";
import { useEffect, useState } from 'react';

const Index = () => {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Single Tab Browsing",
      description: "Automatically closes all other tabs, allowing only one active tab for maximum focus."
    },
    {
      icon: Globe,
      title: "Custom URL Lock",
      description: "Enter any URL (YouTube, Udemy, Docs) to lock your session to that specific page."
    },
    {
      icon: Clock,
      title: "Timed Sessions",
      description: "Choose from predefined durations: 10, 20, 30, or 45 minutes for structured focus time."
    },
    {
      icon: Shield,
      title: "Password Protected",
      description: "Sessions can only be ended with the correct password, ensuring accountability."
    },
    {
      icon: Zap,
      title: "Auto Redirect & Tab Kill",
      description: "Attempts to switch or open new tabs are automatically redirected and closed."
    },
    {
      icon: Download,
      title: "Fetch Current URL",
      description: "Instantly fetch the active tab's URL to use it as your lock URL with one click."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Clone or Download",
      description: "Get the extension from GitHub or download the ZIP file"
    },
    {
      step: "2",
      title: "Enable Developer Mode",
      description: "Go to chrome://extensions and enable Developer mode"
    },
    {
      step: "3",
      title: "Load Unpacked Extension",
      description: "Click 'Load unpacked' and select the extension folder"
    },
    {
      step: "4",
      title: "Start Focusing",
      description: "Click the extension icon and set up your focused session"
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 transition-all duration-300">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              🚀 Chrome Extension
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              <span className="block">One Tab.</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Zero Distractions.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              A powerful Chrome extension that locks your browser to a single tab with password-protected timed sessions.
              Stay focused and eliminate distractions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Chrome className="w-5 h-5 mr-2" />
                Install Extension
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for Maximum Focus
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to create distraction-free browsing sessions and maintain laser focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Easy Installation Guide
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get FocusTab up and running in just a few simple steps. Developer mode installation makes it easy to start focusing immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://github.com/lochansaroy02/FocusTab', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download from GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            How to Use FocusTab
          </h2>
          <div className="space-y-4 text-left">
            {[
              "Click the extension icon in your browser toolbar",
              "Enter the custom URL you want to lock (e.g., https://www.youtube.com)",
              "Click 'Get Link' to auto-fill with your current tab's URL (optional)",
              "Choose a duration for the session (10, 20, 30, or 45 minutes)",
              "Enter a password to secure the session",
              "Click 'Start Session' – your browser is now locked to one tab!",
              "To stop early, re-open the popup and enter your password"
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Eliminate Distractions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of focused users who have transformed their browsing habits with FocusTab.
              Start your journey to better productivity today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://github.com/lochansaroy02/FocusTab', '_blank')}
              >
                <Chrome className="w-5 h-5 mr-2" />
                Install Now - It's Free!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => window.open('https://github.com/lochansaroy02/FocusTab', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FocusTab</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">
                Crafted with ❤️ for developers, parents, teachers, and focused learners.
              </p>
              <p className="text-slate-500 text-sm">
                MIT License. Free for personal and commercial use.
              </p>
              <p className='text-slate-400 text-sm'>  © 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
