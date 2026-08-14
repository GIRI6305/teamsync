import { useState } from 'react';
import { X } from 'lucide-react';

export default function AddEmployeeModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({ name: '', role: '', department: '', email: '', status: 'Active' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now() });
    setFormData({ name: '', role: '', department: '', email: '', status: 'Active' }); // Reset form
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-enter">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Add New Employee</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
            <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Role</label>
              <input required type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Department</label>
              <select value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} className="w-full border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50">
                <option value="">Select...</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold rounded-lg p-3 mt-4 hover:bg-blue-700 transition-colors">
            Save Employee
          </button>
        </form>
      </div>
    </div>
  );
}