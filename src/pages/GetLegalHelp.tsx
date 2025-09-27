import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText, Shield, Clock } from "lucide-react";

const GetLegalHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Legal Help
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with our team of dedicated student lawyers and legal experts. 
              Fill out the form below to get started with your legal case.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>Expert Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Multi-disciplinary teams of lawyers, researchers, and specialists
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>48-Hour Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Quick team assembly and case review within 48 business hours
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  From case analysis to ongoing mentoring and support
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Legal Help Request Form</CardTitle>
              <p className="text-muted-foreground">
                Please provide detailed information about your legal needs
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="familyCondition">Family Condition</Label>
                <Textarea 
                  id="familyCondition" 
                  placeholder="Describe your family situation and any relevant personal details..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaOfHelp">Area of Legal Help Needed</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the area of legal assistance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Law</SelectItem>
                    <SelectItem value="criminal">Criminal Law</SelectItem>
                    <SelectItem value="civil">Civil Law</SelectItem>
                    <SelectItem value="corporate">Corporate Law</SelectItem>
                    <SelectItem value="immigration">Immigration Law</SelectItem>
                    <SelectItem value="property">Property Law</SelectItem>
                    <SelectItem value="employment">Employment Law</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="caseRuntime">Case Running Time</Label>
                <Input id="caseRuntime" placeholder="How long has this case been ongoing?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="caseDescription">Case Description</Label>
                <Textarea 
                  id="caseDescription" 
                  placeholder="Provide a detailed description of your case, including key events, timeline, and current status..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pastProfessionals">Past Professional Figures</Label>
                <Textarea 
                  id="pastProfessionals" 
                  placeholder="List any lawyers, consultants, or other professionals you've worked with on this case..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Case Material Upload</Label>
                <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop your case materials here, or click to browse
                  </p>
                  <Button variant="outline">Choose Files</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalTermsProblem">Describe Your Problem in Legal Terms</Label>
                <Textarea 
                  id="legalTermsProblem" 
                  placeholder="Please describe your legal issue using legal terminology to help our team better understand your needs..."
                  className="min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">
                  This helps our legal experts understand your case more clearly and assign the right team
                </p>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Financial Support Options</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="financialSupport" />
                    <Label htmlFor="financialSupport" className="text-sm">
                      I would like to opt-in for complete financial support assistance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="noFinancialSupport" />
                    <Label htmlFor="noFinancialSupport" className="text-sm">
                      I can handle the financial aspects independently
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms and Conditions and understand that I must complete the case survey upon completion
                </Label>
              </div>

              <Button size="lg" className="w-full">
                Submit Legal Help Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetLegalHelp;