// @ts-nocheck
import React from 'react';

const ProfessionalCard: React.FC<{ professional?: any }> = ({ professional }) => (
  <div className="p-4 border rounded">
    <div className="font-semibold">{professional?.name || 'Unknown'}</div>
    <div className="text-sm text-muted-foreground">{professional?.role}</div>
  </div>
);

export default ProfessionalCard;
