
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    
    // Simulate email sending
    setTimeout(() => {
      setEmailSent(true);
      toast.success("Password reset link sent! Check your inbox.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Islamic Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="islamic-geo" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <polygon points="12.5,0 25,12.5 12.5,25 0,12.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="12.5" cy="12.5" r="8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              <circle cx="12.5" cy="12.5" r="4" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-geo)" className="text-emerald-600"/>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        {/* Back Button */}
        <button
          onClick={() => navigate('/login')}
          className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Login
        </button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">FV</span>
          </div>
          <h1 className="text-2xl font-bold text-emerald-800">Reset Password</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 shadow-xl">
          {!emailSent ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                  Forgot Your Password?
                </h2>
                <p className="text-emerald-600 text-sm">
                  Enter your email address and we'll send you a reset link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-emerald-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                Check Your Inbox
              </h3>
              <p className="text-emerald-600 text-sm mb-6">
                We've sent a password reset link to{' '}
                <span className="font-medium">{email}</span>
              </p>
              <Button
                onClick={() => navigate('/login')}
                variant="outline"
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
              >
                Back to Login
              </Button>
            </div>
          )}

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-emerald-500">
              Didn't receive the email? Check your spam folder or{' '}
              <button
                type="button"
                onClick={() => setEmailSent(false)}
                className="underline hover:text-emerald-600"
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
