import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const AssignProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addAssignment } = useData();
  
  const [formData, setFormData] = useState({
    productSerialNo: '',
    productDescription: '',
    model: '',
    productType: '',
    mqiSerialNo: '',
    quantity: '',
    employeeId: '',
    employeeName: '',
    employeeEmailId: '',
    dateAssigned: '',
    dateReturned: '',
    assignedBy: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAssignment(formData);
    toast({
      title: "Product Assigned",
      description: "Product has been successfully assigned to employee",
    });
    console.log('Assign Product Data:', formData);
    // Reset form
    setFormData({
      productSerialNo: '',
      productDescription: '',
      model: '',
      productType: '',
      mqiSerialNo: '',
      quantity: '',
      employeeId: '',
      employeeName: '',
      employeeEmailId: '',
      dateAssigned: '',
      dateReturned: '',
      assignedBy: ''
    });
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
            <h1 className="text-xl font-bold text-foreground">Assign Product</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Product Assignment
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
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    placeholder="Enter model"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type</Label>
                  <Input
                    id="productType"
                    value={formData.productType}
                    onChange={(e) => handleInputChange('productType', e.target.value)}
                    placeholder="Enter product type"
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

                <div className="space-y-2">
                  <Label htmlFor="dateAssigned">Date Assigned</Label>
                  <Input
                    id="dateAssigned"
                    type="date"
                    value={formData.dateAssigned}
                    onChange={(e) => handleInputChange('dateAssigned', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateReturned">Date Returned</Label>
                  <Input
                    id="dateReturned"
                    type="date"
                    value={formData.dateReturned}
                    onChange={(e) => handleInputChange('dateReturned', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignedBy">Assigned By</Label>
                  <Input
                    id="assignedBy"
                    value={formData.assignedBy}
                    onChange={(e) => handleInputChange('assignedBy', e.target.value)}
                    placeholder="Enter assigned by"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => navigate('/')}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Assign Product
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AssignProduct;
