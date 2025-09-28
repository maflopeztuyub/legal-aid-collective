import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, MessageSquare, FileCheck, Award } from "lucide-react";

export const Features = () => {
  return (
  <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How LAW-TIE Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our innovative platform ensures quality, transparency, and success for all parties involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Clock className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-xl text-primary">48-Hour Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every team member has 48 business hours to respond regarding their interest 
                and commitment to your case, ensuring quick turnaround times.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl text-primary">Team-Based Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Each case is handled by a diverse team including lawyers, researchers, 
                analysts, consultants, and specialists for comprehensive support.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-success mb-4" />
              <CardTitle className="text-xl text-primary">Performance Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Students are ranked based on cases won, lost, and the significance 
                of their work, creating healthy competition and excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-xl text-primary">Legal Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Describe your problem in plain language - our AI helps translate 
                it into legal terms for clearer professional understanding.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <FileCheck className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl text-primary">Mandatory Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Post-case surveys ensure quality control and continuous improvement. 
                Required completion maintains platform standards.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Award className="h-12 w-12 text-success mb-4" />
              <CardTitle className="text-xl text-primary">Career Advancement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Top performers get interview opportunities with partner businesses 
                every semester, creating real career advancement pathways.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};