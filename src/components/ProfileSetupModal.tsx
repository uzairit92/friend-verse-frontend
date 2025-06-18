
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ProfileSetupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileSetupModal = ({ open, onOpenChange }: ProfileSetupModalProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bio: "",
    practicingMuslim: "",
    madhhab: "",
    sect: "",
    ethnicBackground: "",
    country: "",
    city: "",
    prayerMethod: "",
    asrMethod: "",
    adhanReminders: false,
    qiblaCompass: false,
    prayerFrequency: "",
    sunnahFasting: "",
    profileVisibility: "",
    theme: "",
    childFilter: false,
    childAccount: false,
    ageGroup: ""
  });

  // Load saved profile data when modal opens
  useEffect(() => {
    if (open) {
      const savedProfile = localStorage.getItem('fitraahProfile');
      if (savedProfile) {
        setFormData(JSON.parse(savedProfile));
      }
    }
  }, [open]);

  const sections = [
    { title: "Basic Information", id: "basic" },
    { title: "Religious Identity", id: "religious" },
    { title: "Location & Prayer", id: "location" },
    { title: "Practice & Tools", id: "practice" },
    { title: "Privacy Settings", id: "privacy" }
  ];

  const renderBasicInformation = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="username">Username *</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">@</span>
          <Input 
            id="username" 
            placeholder="AhmedKhan"
            className="pl-8"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="ahmed@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          placeholder="+1 234 567 8900"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <Label htmlFor="dob">Date of Birth *</Label>
        <Input 
          id="dob" 
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
        />
      </div>

      <div>
        <Label>Gender *</Label>
        <RadioGroup 
          value={formData.gender} 
          onValueChange={(value) => setFormData({...formData, gender: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
            <Label htmlFor="prefer-not-to-say">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="bio">Short Bio</Label>
        <Input 
          id="bio" 
          placeholder='E.g., "Seeker of knowledge", "Muslim revert"'
          value={formData.bio}
          onChange={(e) => setFormData({...formData, bio: e.target.value})}
        />
      </div>
    </div>
  );

  const renderReligiousIdentity = () => (
    <div className="space-y-4">
      <div>
        <Label>Are you a practicing Muslim?</Label>
        <RadioGroup 
          value={formData.practicingMuslim} 
          onValueChange={(value) => setFormData({...formData, practicingMuslim: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="practicing-yes" />
            <Label htmlFor="practicing-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="practicing-no" />
            <Label htmlFor="practicing-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="practicing-prefer" />
            <Label htmlFor="practicing-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Madhhab (School of Thought)</Label>
        <Select value={formData.madhhab} onValueChange={(value) => setFormData({...formData, madhhab: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select madhhab" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hanafi">Hanafi</SelectItem>
            <SelectItem value="shafii">Shafi'i</SelectItem>
            <SelectItem value="maliki">Maliki</SelectItem>
            <SelectItem value="hanbali">Hanbali</SelectItem>
            <SelectItem value="jafari">Ja'fari (Shia)</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Sect / Denomination</Label>
        <Select value={formData.sect} onValueChange={(value) => setFormData({...formData, sect: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select sect" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sunni">Sunni</SelectItem>
            <SelectItem value="shia">Shia</SelectItem>
            <SelectItem value="ibadi">Ibadi</SelectItem>
            <SelectItem value="ahmadiyya">Ahmadiyya</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="ethnic">Ethnic or Cultural Background</Label>
        <Input 
          id="ethnic" 
          placeholder="E.g., Arab, South Asian, West African"
          value={formData.ethnicBackground}
          onChange={(e) => setFormData({...formData, ethnicBackground: e.target.value})}
        />
      </div>
    </div>
  );

  const renderLocationSettings = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="country">Country *</Label>
        <Input 
          id="country" 
          placeholder="United States"
          value={formData.country}
          onChange={(e) => setFormData({...formData, country: e.target.value})}
        />
      </div>

      <div>
        <Label htmlFor="city">City *</Label>
        <Input 
          id="city" 
          placeholder="New York"
          value={formData.city}
          onChange={(e) => setFormData({...formData, city: e.target.value})}
        />
      </div>

      <div>
        <Label>Prayer Time Calculation Method</Label>
        <Select value={formData.prayerMethod} onValueChange={(value) => setFormData({...formData, prayerMethod: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="umm-al-qura">Umm al-Qura (Makkah)</SelectItem>
            <SelectItem value="isna">ISNA</SelectItem>
            <SelectItem value="mwl">MWL</SelectItem>
            <SelectItem value="egyptian">Egyptian Authority</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Asr Juristic Method</Label>
        <RadioGroup 
          value={formData.asrMethod} 
          onValueChange={(value) => setFormData({...formData, asrMethod: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="standard" id="asr-standard" />
            <Label htmlFor="asr-standard">Standard (Shafi'i, Maliki, Hanbali)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hanafi" id="asr-hanafi" />
            <Label htmlFor="asr-hanafi">Hanafi</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="adhan" 
          checked={formData.adhanReminders}
          onCheckedChange={(checked) => setFormData({...formData, adhanReminders: !!checked})}
        />
        <Label htmlFor="adhan">Receive Adhan reminders/notifications</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="qibla" 
          checked={formData.qiblaCompass}
          onCheckedChange={(checked) => setFormData({...formData, qiblaCompass: !!checked})}
        />
        <Label htmlFor="qibla">Enable Qibla Direction Compass</Label>
      </div>
    </div>
  );

  const renderPracticeTools = () => (
    <div className="space-y-4">
      <div>
        <Label>How often do you pray?</Label>
        <RadioGroup 
          value={formData.prayerFrequency} 
          onValueChange={(value) => setFormData({...formData, prayerFrequency: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="always" id="pray-always" />
            <Label htmlFor="pray-always">Always</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sometimes" id="pray-sometimes" />
            <Label htmlFor="pray-sometimes">Sometimes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rarely" id="pray-rarely" />
            <Label htmlFor="pray-rarely">Rarely</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="pray-prefer" />
            <Label htmlFor="pray-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Do you fast on Sunnah days?</Label>
        <RadioGroup 
          value={formData.sunnahFasting} 
          onValueChange={(value) => setFormData({...formData, sunnahFasting: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="fast-yes" />
            <Label htmlFor="fast-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="fast-no" />
            <Label htmlFor="fast-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sometimes" id="fast-sometimes" />
            <Label htmlFor="fast-sometimes">Sometimes</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-4">
      <div>
        <Label>Who can see your profile?</Label>
        <RadioGroup 
          value={formData.profileVisibility} 
          onValueChange={(value) => setFormData({...formData, profileVisibility: value})}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="everyone" id="profile-everyone" />
            <Label htmlFor="profile-everyone">Everyone</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="friends" id="profile-friends" />
            <Label htmlFor="profile-friends">Friends only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="profile-private" />
            <Label htmlFor="profile-private">No one (private)</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Theme Preference</Label>
        <Select value={formData.theme} onValueChange={(value) => setFormData({...formData, theme: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="quranic">Quranic theme</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="child-filter" 
          checked={formData.childFilter}
          onCheckedChange={(checked) => setFormData({...formData, childFilter: !!checked})}
        />
        <Label htmlFor="child-filter">Enable child-friendly content filter</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="child-account" 
          checked={formData.childAccount}
          onCheckedChange={(checked) => setFormData({...formData, childAccount: !!checked})}
        />
        <Label htmlFor="child-account">Is this a child account?</Label>
      </div>

      {formData.childAccount && (
        <div>
          <Label>Age group for tailored content</Label>
          <Select value={formData.ageGroup} onValueChange={(value) => setFormData({...formData, ageGroup: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-8">Kids aged 4–8</SelectItem>
              <SelectItem value="9-13">Pre-teens 9–13</SelectItem>
              <SelectItem value="14-17">Teens 14–17</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 0: return renderBasicInformation();
      case 1: return renderReligiousIdentity();
      case 2: return renderLocationSettings();
      case 3: return renderPracticeTools();
      case 4: return renderPrivacySettings();
      default: return renderBasicInformation();
    }
  };

  const validateForm = () => {
    const requiredFields = ['username', 'email', 'dateOfBirth', 'gender', 'country', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;
    
    localStorage.setItem('fitraahProfile', JSON.stringify(formData));
    toast({
      title: "Profile Saved",
      description: "Your profile has been saved successfully!",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Setup Your Profile</DialogTitle>
          <p className="text-sm text-gray-600">
            Help us personalize your Fitraah experience. Fields marked with * are required.
          </p>
        </DialogHeader>

        <div className="flex gap-6">
          {/* Section Navigation */}
          <div className="w-64 space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  activeSection === index 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">
                {sections[activeSection].title}
              </h3>
            </div>
            
            {renderCurrentSection()}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                disabled={activeSection === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Skip for now
                </Button>
                
                {activeSection === sections.length - 1 ? (
                  <Button onClick={handleSave}>Save Profile</Button>
                ) : (
                  <Button onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;
