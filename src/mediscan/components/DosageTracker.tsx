import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Bell, CheckCircle2, Calendar, Pill, Trash2 } from 'lucide-react';
import AppleIcon from '../../components/ui/AppleIcon';

interface Log {
    id: number;
    medication: string;
    dosage: string;
    time: string;
    notes: string;
    completed: boolean;
}

const DosageTracker: React.FC = () => {
    const [logs, setLogs] = useState<Log[]>([
        { id: 1, medication: 'Amoxicillin', dosage: '500mg', time: '08:00 AM', notes: 'Taken with food', completed: false },
        { id: 2, medication: 'Vitamin D', dosage: '1000IU', time: '09:30 AM', notes: '', completed: false },
        { id: 3, medication: 'Lisinopril', dosage: '10mg', time: 'Yesterday', notes: 'Routine check', completed: true },
    ]);

    const [form, setForm] = useState({
        medication: '',
        dosage: '',
        time: '',
        notes: '',
        reminder: false
    });

    const handleLog = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.medication) return;

        const newLog: Log = {
            id: Date.now(),
            medication: form.medication,
            dosage: form.dosage || 'N/A',
            time: form.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            notes: form.notes,
            completed: false
        };

        setLogs([newLog, ...logs]);
        setForm({ medication: '', dosage: '', time: '', notes: '', reminder: false });
    };

    const toggleLog = (id: number) => {
        setLogs(logs.map(log =>
            log.id === id ? { ...log, completed: !log.completed } : log
        ));
    };

    return (
        <section id="tracker" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-brand-subtle/50 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-primary">Track Your <span className="text-transparent bg-clip-text bg-brand-gradient">Intake</span></h2>
                <p className="text-brand-primary/60 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
                    Stay on top of your schedule. Log dosages, set smart reminders, and monitor your adherence history in real-time.
                    <span className="inline-block ml-3 text-[10px] font-bold tracking-wider py-1 px-2 bg-brand-accent/10 text-brand-accent rounded-full border border-brand-accent/30 align-middle">DEMO MODE</span>
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Tracker Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 bg-white border border-brand-subtle rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden shadow-2xl shadow-brand-primary/5"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <form onSubmit={handleLog} className="relative z-10 space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-brand-primary mb-2 ml-1">Medication Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Ibuprofen"
                                className="w-full bg-brand-bg border border-brand-subtle rounded-xl px-4 py-4 text-brand-primary placeholder-brand-primary/30 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                                value={form.medication}
                                onChange={e => setForm({ ...form, medication: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-brand-primary mb-2 ml-1">Dosage</label>
                                <input
                                    type="text"
                                    placeholder="mg / ml"
                                    className="w-full bg-brand-bg border border-brand-subtle rounded-xl px-4 py-4 text-brand-primary placeholder-brand-primary/30 focus:outline-none focus:border-brand-accent transition-all font-medium"
                                    value={form.dosage}
                                    onChange={e => setForm({ ...form, dosage: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-primary mb-2 ml-1">Time</label>
                                <div className="relative">
                                    <input
                                        type="time"
                                        className="w-full bg-brand-bg border border-brand-subtle rounded-xl px-4 py-4 text-brand-primary placeholder-brand-primary/30 focus:outline-none focus:border-brand-accent transition-all font-medium [color-scheme:light]"
                                        value={form.time}
                                        onChange={e => setForm({ ...form, time: e.target.value })}
                                    />
                                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-primary/40 w-4 h-4 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-primary mb-2 ml-1">Notes</label>
                            <textarea
                                rows={2}
                                placeholder="Any side effects..."
                                className="w-full bg-brand-bg border border-brand-subtle rounded-xl px-4 py-4 text-brand-primary placeholder-brand-primary/30 focus:outline-none focus:border-brand-accent transition-all resize-none font-medium"
                                value={form.notes}
                                onChange={e => setForm({ ...form, notes: e.target.value })}
                            />
                        </div>

                        <div
                            className="flex items-center justify-between bg-brand-bg p-4 rounded-xl border border-brand-subtle cursor-pointer hover:bg-brand-subtle/50 transition-colors"
                            onClick={() => setForm({ ...form, reminder: !form.reminder })}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${form.reminder ? 'bg-brand-accent' : 'bg-gray-300'}`}>
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${form.reminder ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                </div>
                                <span className="text-sm font-bold text-brand-primary">Set Reminder</span>
                            </div>
                            <Bell className={`w-5 h-5 transition-colors ${form.reminder ? 'text-brand-accent' : 'text-gray-400'}`} />
                        </div>

                        <button type="submit" className="w-full bg-brand-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/50 transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]">
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            Log Dose
                        </button>
                    </form>
                </motion.div>

                {/* Recent Logs List */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 flex flex-col h-full"
                >
                    {/* Header for list */}
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h3 className="text-2xl font-bold flex items-center gap-2 text-brand-primary">
                            <Calendar className="w-6 h-6 text-brand-accent" />
                            Recent Activity
                        </h3>
                        <span className="text-xs text-brand-primary/40 uppercase tracking-widest font-bold bg-brand-bg px-3 py-1 rounded-full">Today</span>
                    </div>

                    <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar max-h-[600px]">
                        {logs.map((log) => (
                            <div
                                key={log.id}
                                onClick={() => toggleLog(log.id)}
                                className={`group bg-white hover:bg-brand-bg border rounded-2xl p-5 transition-all duration-300 flex items-start gap-5 shadow-sm hover:shadow-md cursor-pointer ${log.completed ? 'border-green-200 bg-green-50/30' : 'border-brand-subtle hover:border-brand-accent/50'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shrink-0 ${log.completed ? 'bg-green-100' : 'bg-brand-bg border border-brand-subtle group-hover:scale-105'}`}>
                                    {log.completed ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    ) : (
                                        <Pill className="w-6 h-6 text-brand-primary group-hover:text-brand-accent transition-colors" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h4 className={`font-bold text-lg transition-colors truncate pr-2 ${log.completed ? 'text-brand-primary/40 line-through' : 'text-brand-primary group-hover:text-brand-accent'}`}>{log.medication}</h4>
                                        <span className="text-xs font-bold font-mono text-brand-primary/40 bg-brand-subtle/30 px-2 py-1 rounded whitespace-nowrap">{log.time}</span>
                                    </div>
                                    <p className={`text-sm mt-1 font-medium ${log.completed ? 'text-brand-primary/30 line-through' : 'text-brand-primary/60'}`}>Dosage: <span className={log.completed ? '' : 'text-brand-primary'}>{log.dosage}</span></p>
                                    {log.notes && (
                                        <p className={`text-xs mt-2 italic truncate ${log.completed ? 'text-brand-primary/20 line-through' : 'text-brand-primary/50'}`}>"{log.notes}"</p>
                                    )}
                                </div>
                                <div className={`transition-opacity self-center shrink-0 ${log.completed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <CheckCircle2 className={`w-6 h-6 ${log.completed ? 'text-green-500' : 'text-brand-subtle'}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Banner for app */}
                    <div className="bg-brand-primary rounded-[2rem] p-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[60px] translate-x-10 -translate-y-10"></div>
                        <div className="relative z-10">
                            <h4 className="font-bold text-xl text-white">Download MediScan iOS</h4>
                            <p className="text-sm text-white/70 mt-2 max-w-sm">Get advanced analytics, refill alerts, and shareable doctor reports directly on your iPhone.</p>
                        </div>
                        <button className="relative z-10 px-8 py-3 bg-white text-brand-primary font-bold rounded-full text-sm hover:scale-105 transition-transform whitespace-nowrap shadow-lg flex items-center gap-2">
                            <AppleIcon size={18} /> App Store
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DosageTracker;