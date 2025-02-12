// src/components/PreFillingFlow.jsx

import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Clock } from 'lucide-react';

const PreFillingFlow = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1); // Start at Step 1
  const [uploading, setUploading] = useState(false);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="shadow-lg p-6 rounded-lg bg-white max-w-xl mx-auto">
            <h2 className="text-2xl text-center font-bold">Welcome to Your Game Plan Journey</h2>
            <p className="text-center mt-4 text-gray-600">Let’s make this easy for you!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Upload className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <p className="font-medium">Upload Documents</p>
                <p className="text-sm text-gray-600">We’ll extract the data</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <FileText className="h-8 w-8 mx-auto text-green-600 mb-2" />
                <p className="font-medium">AI Pre-fills Form</p>
                <p className="text-sm text-gray-600">Save time with automation</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <CheckCircle className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                <p className="font-medium">Expert Review</p>
                <p className="text-sm text-gray-600">Human verification</p>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentStep(2); // Move to Step 2
              }}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Let's Get Started
            </button>
          </div>
        );

      case 2:
        return (
          <div className="shadow-lg p-6 rounded-lg bg-white max-w-xl mx-auto">
            <h2 className="text-2xl text-center font-bold">Step 2: Upload Your Documents</h2>
            <p className="text-center mt-4 text-gray-600">You can upload your documents here.</p>
            <div className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="font-medium">Transcript</p>
                  <p className="text-sm text-gray-600">Drop your latest transcript here</p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="font-medium">Test Scores</p>
                  <p className="text-sm text-gray-600">SAT/ACT/AP score reports</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer">
                <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="font-medium">Additional Documents (Optional)</p>
                <p className="text-sm text-gray-600">Awards, certificates, or activity records</p>
              </div>

              <button 
                onClick={() => {
                  setUploading(true);
                  setTimeout(() => {
                    setUploading(false);
                    setCurrentStep(3);  // Go to Step 3
                  }, 2000);
                }}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {uploading ? "Uploading..." : "Upload Documents"}
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="shadow-lg p-6 rounded-lg bg-white max-w-xl mx-auto">
            <h2 className="text-2xl text-center font-bold">Step 3: Processing Your Information</h2>
            <div className="space-y-8 mt-6">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Extracting academic information...</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Analyzing test scores...</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-500 animate-pulse" />
                  <p>Processing extracurricular activities...</p>
                </div>
              </div>

              <div className="text-center text-gray-600">
                <button 
                  onClick={() => {
                    setCurrentStep(4);  // Go to Step 4 (Review)
                    onComplete(); // Notify parent component that pre-fill is complete
                  }}
                  className="mt-4 px-6 py-2 text-blue-600 hover:text-blue-700"
                >
                  Continue →
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <p>Invalid step</p>;
    }
  };

  return <div className="container mx-auto">{renderStep()}</div>;
};

export default PreFillingFlow;
