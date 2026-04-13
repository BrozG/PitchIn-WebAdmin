'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Eye, Download, Filter } from 'lucide-react';

type Founder = {
  id: string;
  company: string;
  founderName: string;
  stage: string;
  amountRaising: number;
  submittedDate: string;
  linkedin: string;
  status: 'pending' | 'approved' | 'rejected';
};

export default function AdminDashboard() {
  const [founders, setFounders] = useState<Founder[]>([
    {
      id: '1',
      company: 'TechStart Inc',
      founderName: 'Alex Johnson',
      stage: 'Seed',
      amountRaising: 500000,
      submittedDate: '2026-04-10',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      status: 'pending',
    },
    {
      id: '2',
      company: 'HealthAI',
      founderName: 'Maria Chen',
      stage: 'Series A',
      amountRaising: 2000000,
      submittedDate: '2026-04-09',
      linkedin: 'https://linkedin.com/in/mariachen',
      status: 'pending',
    },
    {
      id: '3',
      company: 'EduFlow',
      founderName: 'David Park',
      stage: 'Pre-Seed',
      amountRaising: 150000,
      submittedDate: '2026-04-08',
      linkedin: 'https://linkedin.com/in/davidpark',
      status: 'approved',
    },
  ]);

  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  const handleApprove = (id: string) => {
    setFounders(founders.map(f => f.id === id ? { ...f, status: 'approved' } : f));
  };

  const handleReject = (id: string) => {
    setFounders(founders.map(f => f.id === id ? { ...f, status: 'rejected' } : f));
  };

  const pendingCount = founders.filter(f => f.status === 'pending').length;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gold-400">Pitch In Admin</h1>
        <p className="text-gray-400">Manage founder approvals, investors, and revenue</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold">Pending Queue</h3>
          <p className="text-4xl font-bold mt-2 text-gold-400">{pendingCount}</p>
          <p className="text-gray-400 text-sm">Founders awaiting review</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold">Active Founders</h3>
          <p className="text-4xl font-bold mt-2 text-green-400">{founders.filter(f => f.status === 'approved').length}</p>
          <p className="text-gray-400 text-sm">Paid & approved</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold">Investors</h3>
          <p className="text-4xl font-bold mt-2 text-blue-400">142</p>
          <p className="text-gray-400 text-sm">Registered investors</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold">MRR</h3>
          <p className="text-4xl font-bold mt-2 text-purple-400">$12.5K</p>
          <p className="text-gray-400 text-sm">Monthly recurring revenue</p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Pending Founders</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <Filter size={18} /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Founder</th>
                <th className="p-4 text-left">Stage</th>
                <th className="p-4 text-left">Amount Raising</th>
                <th className="p-4 text-left">Submitted</th>
                <th className="p-4 text-left">LinkedIn</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {founders.filter(f => f.status === 'pending').map((founder) => (
                <tr key={founder.id} className="border-b border-gray-800 hover:bg-gray-850">
                  <td className="p-4 font-medium">{founder.company}</td>
                  <td className="p-4">{founder.founderName}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                      {founder.stage}
                    </span>
                  </td>
                  <td className="p-4">${founder.amountRaising.toLocaleString()}</td>
                  <td className="p-4 text-gray-400">{founder.submittedDate}</td>
                  <td className="p-4">
                    <a href={founder.linkedin} target="_blank" className="text-gold-400 hover:underline">
                      View
                    </a>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(founder.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-900/30 text-green-300 rounded-lg hover:bg-green-800/50"
                      >
                        <CheckCircle size={16} /> Approve
                      </button>
                      <button
                        onClick={() => handleReject(founder.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-red-900/30 text-red-300 rounded-lg hover:bg-red-800/50"
                      >
                        <XCircle size={16} /> Reject
                      </button>
                      <button
                        onClick={() => setSelectedFounder(founder)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                      >
                        <Eye size={16} /> Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedFounder && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 max-w-2xl w-full p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{selectedFounder.company}</h3>
              <button onClick={() => setSelectedFounder(null)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm">Founder Name</label>
                  <p className="text-lg">{selectedFounder.founderName}</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Stage</label>
                  <p className="text-lg">{selectedFounder.stage}</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Amount Raising</label>
                  <p className="text-lg">${selectedFounder.amountRaising.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Submitted</label>
                  <p className="text-lg">{selectedFounder.submittedDate}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm">LinkedIn</label>
                <a href={selectedFounder.linkedin} target="_blank" className="text-gold-400 hover:underline">
                  {selectedFounder.linkedin}
                </a>
              </div>
              <div className="pt-6 flex justify-end gap-4">
                <button
                  onClick={() => {
                    handleApprove(selectedFounder.id);
                    setSelectedFounder(null);
                  }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
                >
                  Approve Founder
                </button>
                <button
                  onClick={() => {
                    handleReject(selectedFounder.id);
                    setSelectedFounder(null);
                  }}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 text-center text-gray-500 text-sm">
        Pitch In Admin Dashboard • Protected by HTTP Basic Auth • v1.0
      </footer>
    </div>
  );
}
