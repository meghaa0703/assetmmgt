
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Database } from 'lucide-react';

const ViewDatabase = () => {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState('products');

  // Mock data for demonstration
  const mockProductData = [
    {
      id: 1,
      department: 'Electrical',
      title: 'Digital Multimeter',
      type: 'Measuring Instrument',
      productSerialNumber: 'DMM001',
      brandMake: 'Fluke',
      modelNumber: '87V',
      calibrationRequired: 'Yes',
      assetTagNumber: 'ET001',
      mqiSerialNumber: 'MQI001',
      cost: '299.99',
      purchaseDate: '2024-01-15'
    },
    {
      id: 2,
      department: 'Electrical',
      title: 'Oscilloscope',
      type: 'Testing Equipment',
      productSerialNumber: 'OSC001',
      brandMake: 'Tektronix',
      modelNumber: 'TBS1000',
      calibrationRequired: 'Yes',
      assetTagNumber: 'ET002',
      mqiSerialNumber: 'MQI002',
      cost: '1299.99',
      purchaseDate: '2024-02-01'
    }
  ];

  const mockAssignmentData = [
    {
      id: 1,
      productSerialNo: 'DMM001',
      productDescription: 'Digital Multimeter',
      model: '87V',
      productType: 'Measuring Instrument',
      mqiSerialNo: 'MQI001',
      quantity: '1',
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      employeeEmailId: 'john.smith@company.com',
      dateAssigned: '2024-03-01',
      assignedBy: 'Admin'
    }
  ];

  const mockReturnData = [
    {
      id: 1,
      productSerialNo: 'OSC001',
      productDescription: 'Oscilloscope',
      modelNo: 'TBS1000',
      mqiSerialNo: 'MQI002',
      quantity: '1',
      employeeId: 'EMP002',
      employeeName: 'Jane Doe',
      employeeEmailId: 'jane.doe@company.com'
    }
  ];

  const renderProductTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Department</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Serial Number</TableHead>
          <TableHead>Brand/Make</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Calibration Required</TableHead>
          <TableHead>Asset Tag</TableHead>
          <TableHead>MQI Serial</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Purchase Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockProductData.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.department}</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.type}</TableCell>
            <TableCell>{product.productSerialNumber}</TableCell>
            <TableCell>{product.brandMake}</TableCell>
            <TableCell>{product.modelNumber}</TableCell>
            <TableCell>{product.calibrationRequired}</TableCell>
            <TableCell>{product.assetTagNumber}</TableCell>
            <TableCell>{product.mqiSerialNumber}</TableCell>
            <TableCell>${product.cost}</TableCell>
            <TableCell>{product.purchaseDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderAssignmentTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Serial No</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>MQI Serial</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Employee ID</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Employee Email</TableHead>
          <TableHead>Date Assigned</TableHead>
          <TableHead>Assigned By</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockAssignmentData.map((assignment) => (
          <TableRow key={assignment.id}>
            <TableCell>{assignment.productSerialNo}</TableCell>
            <TableCell>{assignment.productDescription}</TableCell>
            <TableCell>{assignment.model}</TableCell>
            <TableCell>{assignment.productType}</TableCell>
            <TableCell>{assignment.mqiSerialNo}</TableCell>
            <TableCell>{assignment.quantity}</TableCell>
            <TableCell>{assignment.employeeId}</TableCell>
            <TableCell>{assignment.employeeName}</TableCell>
            <TableCell>{assignment.employeeEmailId}</TableCell>
            <TableCell>{assignment.dateAssigned}</TableCell>
            <TableCell>{assignment.assignedBy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderReturnTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Serial No</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Model No</TableHead>
          <TableHead>MQI Serial</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Employee ID</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Employee Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockReturnData.map((returnItem) => (
          <TableRow key={returnItem.id}>
            <TableCell>{returnItem.productSerialNo}</TableCell>
            <TableCell>{returnItem.productDescription}</TableCell>
            <TableCell>{returnItem.modelNo}</TableCell>
            <TableCell>{returnItem.mqiSerialNo}</TableCell>
            <TableCell>{returnItem.quantity}</TableCell>
            <TableCell>{returnItem.employeeId}</TableCell>
            <TableCell>{returnItem.employeeName}</TableCell>
            <TableCell>{returnItem.employeeEmailId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

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
            <h1 className="text-xl font-bold text-foreground">View Database</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-purple-600" />
                Database Records
              </CardTitle>
              <Select value={selectedTable} onValueChange={setSelectedTable}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select table" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="products">Products</SelectItem>
                  <SelectItem value="assignments">Product Assignments</SelectItem>
                  <SelectItem value="returns">Product Returns</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              {selectedTable === 'products' && renderProductTable()}
              {selectedTable === 'assignments' && renderAssignmentTable()}
              {selectedTable === 'returns' && renderReturnTable()}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ViewDatabase;
