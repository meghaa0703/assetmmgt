import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Users, 
  RotateCcw, 
  Database, 
  Zap, 
  User,
  LogOut
} from 'lucide-react';

interface UserData {
  email: string;
  type: 'user' | 'admin';
  name: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };

  const handleSectionClick = (section: string, route: string) => {
    console.log(`Navigating to ${section}`);
    navigate(route);
  };

  if (!user) {
    return null;
  }

  const dashboardSections = [
    {
      title: "New Product",
      description: "Add new products to the inventory system",
      icon: Plus,
      color: "from-aesthetic-green-400 to-aesthetic-green-600",
      onClick: () => handleSectionClick("New Product", "/new-product")
    },
    {
      title: "Assign Product",
      description: "Assign products to employees or departments",
      icon: Users,
      color: "from-blue-400 to-blue-600",
      onClick: () => handleSectionClick("Assign Product", "/assign-product")
    },
    {
      title: "Return Product",
      description: "Process product returns and updates",
      icon: RotateCcw,
      color: "from-orange-400 to-orange-600",
      onClick: () => handleSectionClick("Return Product", "/return-product")
    },
    {
      title: "View Database",
      description: "Access and manage the complete product database",
      icon: Database,
      color: "from-purple-400 to-purple-600",
      onClick: () => handleSectionClick("View Database", "/view-database")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white-100 to-aesthetic-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-aesthetic-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-aesthetic-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-aesthetic-green-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Electrical Department</h1>
                <p className="text-sm text-muted-foreground">Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-2 bg-aesthetic-green-50 rounded-lg">
                <User className="h-4 w-4 text-aesthetic-green-600" />
                <span className="text-sm font-medium text-aesthetic-green-700">
                  {user.name}
                </span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-aesthetic-green-600 hover:text-aesthetic-green-700 hover:bg-aesthetic-green-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-aesthetic-green-200">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome back, {user.name}!
            </h2>
            <p className="text-muted-foreground">
              You have full access to all system functions and features.
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {dashboardSections.map((section, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={section.onClick}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className={`p-3 bg-gradient-to-r ${section.color} rounded-lg shadow-lg`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-aesthetic-green-700 transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <Button className="w-full bg-aesthetic-green-600 hover:bg-aesthetic-green-700 text-white transition-colors">
                  Access Section
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border border-aesthetic-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-aesthetic-green-700">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border border-aesthetic-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Assigned Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">856</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border border-aesthetic-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">23</div>
              <p className="text-xs text-muted-foreground">-8% from last month</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
