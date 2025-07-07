
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';

const NewProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    department: '',
    title: '',
    type: '',
    inwardDate: '',
    quantity: '',
    productSerialNumber: '',
    brandMake: '',
    range: '',
    modelNumber: '',
    calibrationRequired: '',
    lastCalibrationDate: '',
    nextCalibrationDate: '',
    assetTagNumber: '',
    project: '',
    mqiSerialNumber: '',
    cost: '',
    purchaseDate: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product Added",
      description: "New product has been successfully added to the database",
    });
    console.log('New Product Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white-100 to-aesthetic-green-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-aesthetic-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mr-4 text-aesthetic-green-600 hover:text-aesthetic-green-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-bold text-foreground">Add New Product</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2 text-aesthetic-green-600" />
              Product Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Enter department"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    placeholder="Enter product type"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inwardDate">Inward Date</Label>
                  <Input
                    id="inwardDate"
                    type="date"
                    value={formData.inwardDate}
                    onChange={(e) => handleInputChange('inwardDate', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder="Enter quantity"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productSerialNumber">Product Serial Number</Label>
                  <Input
                    id="productSerialNumber"
                    value={formData.productSerialNumber}
                    onChange={(e) => handleInputChange('productSerialNumber', e.target.value)}
                    placeholder="Enter serial number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandMake">Brand/Make</Label>
                  <Input
                    id="brandMake"
                    value={formData.brandMake}
                    onChange={(e) => handleInputChange('brandMake', e.target.value)}
                    placeholder="Enter brand/make"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="range">Range</Label>
                  <Input
                    id="range"
                    value={formData.range}
                    onChange={(e) => handleInputChange('range', e.target.value)}
                    placeholder="Enter range"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modelNumber">Model Number</Label>
                  <Input
                    id="modelNumber"
                    value={formData.modelNumber}
                    onChange={(e) => handleInputChange('modelNumber', e.target.value)}
                    placeholder="Enter model number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Calibration Required</Label>
                  <RadioGroup
                    value={formData.calibrationRequired}
                    onValueChange={(value) => handleInputChange('calibrationRequired', value)}
                    className="flex flex-row space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="cal-yes" />
                      <Label htmlFor="cal-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="cal-no" />
                      <Label htmlFor="cal-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastCalibrationDate">Last Calibration Date</Label>
                  <Input
                    id="lastCalibrationDate"
                    type="date"
                    value={formData.lastCalibrationDate}
                    onChange={(e) => handleInputChange('lastCalibrationDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nextCalibrationDate">Next Calibration Date</Label>
                  <Input
                    id="nextCalibrationDate"
                    type="date"
                    value={formData.nextCalibrationDate}
                    onChange={(e) => handleInputChange('nextCalibrationDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assetTagNumber">Asset Tag Number</Label>
                  <Input
                    id="assetTagNumber"
                    value={formData.assetTagNumber}
                    onChange={(e) => handleInputChange('assetTagNumber', e.target.value)}
                    placeholder="Enter asset tag number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project</Label>
                  <Input
                    id="project"
                    value={formData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                    placeholder="Enter project name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mqiSerialNumber">MQI Serial Number</Label>
                  <Input
                    id="mqiSerialNumber"
                    value={formData.mqiSerialNumber}
                    onChange={(e) => handleInputChange('mqiSerialNumber', e.target.value)}
                    placeholder="Enter MQI serial number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cost">Cost</Label>
                  <Input
                    id="cost"
                    type="number"
                    step="0.01"
                    value={formData.cost}
                    onChange={(e) => handleInputChange('cost', e.target.value)}
                    placeholder="Enter cost"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purchaseDate">Purchase Date</Label>
                  <Input
                    id="purchaseDate"
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => navigate('/')}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-aesthetic-green-600 hover:bg-aesthetic-green-700">
                  Add Product
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NewProduct;
