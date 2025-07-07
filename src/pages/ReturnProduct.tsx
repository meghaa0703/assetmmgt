
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const ReturnProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    productSerialNo: '',
    productDescription: '',
    modelNo: '',
    mqiSerialNo: '',
    quantity: '',
    employeeId: '',
    employeeName: '',
    employeeEmailId: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product Returned",
      description: "Product has been successfully returned",
    });
    console.log('Return Product Data:', formData);
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
            <h1 className="text-xl font-bold text-foreground">Return Product</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RotateCcw className="h-5 w-5 mr-2 text-orange-600" />
              Product Return
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="productSerialNo">Product Serial No</Label>
                  <Input
                    id="productSerialNo"
                    value={formData.productSerialNo}
                    onChange={(e) => handleInputChange('productSerialNo', e.target.value)}
                    placeholder="Enter product serial number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productDescription">Product Description</Label>
                  <Input
                    id="productDescription"
                    value={formData.productDescription}
                    onChange={(e) => handleInputChange('productDescription', e.target.value)}
                    placeholder="Enter product description"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modelNo">Model No</Label>
                  <Input
                    id="modelNo"
                    value={formData.modelNo}
                    onChange={(e) => handleInputChange('modelNo', e.target.value)}
                    placeholder="Enter model number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mqiSerialNo">MQI Serial No</Label>
                  <Input
                    id="mqiSerialNo"
                    value={formData.mqiSerialNo}
                    onChange={(e) => handleInputChange('mqiSerialNo', e.target.value)}
                    placeholder="Enter MQI serial number"
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
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input
                    id="employeeId"
                    value={formData.employeeId}
                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    placeholder="Enter employee ID"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeName">Employee Name</Label>
                  <Input
                    id="employeeName"
                    value={formData.employeeName}
                    onChange={(e) => handleInputChange('employeeName', e.target.value)}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeEmailId">Employee Email ID</Label>
                  <Input
                    id="employeeEmailId"
                    type="email"
                    value={formData.employeeEmailId}
                    onChange={(e) => handleInputChange('employeeEmailId', e.target.value)}
                    placeholder="Enter employee email"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => navigate('/')}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                  Return Product
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ReturnProduct;
