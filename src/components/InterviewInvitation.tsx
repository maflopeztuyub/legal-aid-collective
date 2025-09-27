// @ts-nocheck
import React from 'react';

const InterviewInvitation: React.FC<{ invitation?: any }> = ({ invitation }) => (
  <div className="p-4 border rounded">
    <div className="font-semibold">{invitation?.candidateName || 'Candidate'}</div>
    <div className="text-sm text-muted-foreground">{invitation?.scheduledDate} {invitation?.scheduledTime}</div>
  </div>
);

export default InterviewInvitation;
