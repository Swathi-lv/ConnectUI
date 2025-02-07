import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from './shared/Button';
import Container from './shared/Container';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 min-h-[100svh]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://videos.ctfassets.net/qw6xwi20d4ue/3nAugoiXiJKkh5oKvXhgQz/c5a9733f99e4dc7e9ee1550672b9283d/5G_Network_-_67577__1080p_.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Container className="relative py-20 md:py-32 h-full flex items-center">
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Experience the Future with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">
                YourBrand 5G Plus
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
              Connect to India's fastest growing 5G network with superior coverage and lightning-fast speeds up to 3Gbps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button icon={ArrowRight}>
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                icon={Play}
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              variant="secondary"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0"
            >
              Close
            </Button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="YourBrand 5G Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}