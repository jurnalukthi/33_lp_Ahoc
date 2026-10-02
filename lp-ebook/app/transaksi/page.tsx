"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Scale,
  Search,
  Trash2,
  Plus,
  Edit,
  RotateCcw,
  Download,
  CheckSquare,
  Square,
  Copy,
  Check,
  AlertTriangle,
  ArrowLeft,
  X,
  Filter,
  Users,
  CreditCard,
  Layers,
  Sparkles
} from "lucide-react";

export interface TransactionRecord {
  id: string;
  email: string;
  nama: string;
  nominal: number;
  waktu: string;
  sumber: string;
  refTransaksi: string;
}

const INITIAL_TRANSACTIONS: TransactionRecord[] = [
  {
    id: "tx-1",
    email: "onestringlab@gmail.com",
    nama: "Rajo Guguk",
    nominal: 0,
    waktu: "2 Okt 2026, 02.57",
    sumber: "lynk_webhook",
    refTransaksi: "27b0811965e098f5ef7ee3adf2a3cb0c",
  },
  {
    id: "tx-2",
    email: "anyonorman@gmail.com",
    nama: "Ando Sibutar",
    nominal: 0,
    waktu: "2 Okt 2026, 02.49",
    sumber: "lynk_webhook",
    refTransaksi: "5851b5dc41797a2e06af9acd20653f92",
  },
  {
    id: "tx-3",
    email: "onestringlab@gmail.com",
    nama: "Rio Nasution",
    nominal: 0,
    waktu: "2 Okt 2026, 02.29",
    sumber: "lynk_webhook",
    refTransaksi: "e67dc5ab1ee5ac78f5a8f277522f6bc1",
  },
  {
    id: "tx-4",
    email: "rionorman@gmail.com",
    nama: "Yulrio Brianorman",
    nominal: 0,
    waktu: "25 Sep 2026, 05.53",
    sumber: "lynk_webhook",
    refTransaksi: "6a5af463ca739229a4bebbc8c3636f4d",
  },
  {
    id: "tx-5",
    email: "onestringlab@gmail.com",
    nama: "Rajo Intan",
    nominal: 0,
    waktu: "25 Sep 2026, 04.10",
    sumber: "lynk_webhook",
    refTransaksi: "LIVE-TEST-GMAIL-001",
  },
  {
    id: "tx-6",
    email: "jurnalukthi@gmail.com",
    nama: "Rajo Intan",
    nominal: 50000,
    waktu: "25 Sep 2026, 00.12",
    sumber: "lynk_webhook",
    refTransaksi: "ORDER-TEST-WM-005",
  },
  {
    id: "tx-7",
    email: "jurnalukthi@gmail.com",
    nama: "Rajo Intan",
    nominal: 50000,
    waktu: "25 Sep 2026, 00.09",
    sumber: "lynk_webhook",
    refTransaksi: "ORDER-TEST-WM-004",
  },
  {
    id: "tx-8",
    email: "jurnalukthi@gmail.com",
    nama: "Rajo Intan",
    nominal: 50000,
    waktu: "25 Sep 2026, 00.05",
    sumber: "lynk_webhook",
    refTransaksi: "ORDER-CLEAN-TEST-003",
  },
  {
    id: "tx-9",
    email: "jurnalukthi@gmail.com",
    nama: "Rajo Intan",
    nominal: 50000,
    waktu: "24 Sep 2026, 23.48",
    sumber: "lynk_webhook",
    refTransaksi: "ORDER-TEST-WM-002",
  },
  {
    id: "tx-10",
    email: "jurnalukthi@gmail.com",
    nama: "Rajo Intan",
    nominal: 50000,
    waktu: "24 Sep 2026, 23.38",
    sumber: "lynk_webhook",
    refTransaksi: "ORDER-LYNK-SIM-001",
  },
  {
    id: "tx-11",
    email: "onestringlab@gmail.com",
    nama: "Rajo Intan",
    nominal: 0,
    waktu: "24 Sep 2026, 23.02",
    sumber: "lynk_webhook",
    refTransaksi: "799c6ba43e3c314468c48d7227982b74",
  },
];

const STORAGE_KEY = "tipikor_transactions_data_v1";

export default function TransaksiCRUDPage() {
  const [data, setData] = useState<TransactionRecord[]>([]);
  const [search, setSearch] = useState("");
  const [filterNominal, setFilterNominal] = useState<"all" | "zero" | "paid">("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [copiedRef, setCopiedRef] = useState<string | null>(null);

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<TransactionRecord | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    nominal: "0",
    waktu: "",
    sumber: "lynk_webhook",
    refTransaksi: "",
  });

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setData(JSON.parse(saved));
      } else {
        setData(INITIAL_TRANSACTIONS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
      }
    } catch {
      setData(INITIAL_TRANSACTIONS);
    }
  }, []);

  // Save to local storage
  const persistData = (newData: TransactionRecord[]) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error("Failed saving to localStorage", e);
    }
  };

  // Filtered list
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.refTransaksi.toLowerCase().includes(search.toLowerCase()) ||
        item.sumber.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (filterNominal === "zero") return item.nominal === 0;
      if (filterNominal === "paid") return item.nominal > 0;
      return true;
    });
  }, [data, search, filterNominal]);

  // Summary Metrics
  const stats = useMemo(() => {
    const totalCount = data.length;
    const totalAmount = data.reduce((acc, curr) => acc + curr.nominal, 0);
    const zeroCount = data.filter((d) => d.nominal === 0).length;
    const paidCount = data.filter((d) => d.nominal > 0).length;
    return { totalCount, totalAmount, zeroCount, paidCount };
  }, [data]);

  // Format currency
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Selection handlers
  const handleSelectAll = () => {
    if (selectedIds.length === filteredData.length && filteredData.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredData.map((d) => d.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Delete handlers
  const handleDeleteOne = (id: string, name: string) => {
    if (window.confirm(`Hapus data transaksi atas nama "${name}"?`)) {
      const updated = data.filter((item) => item.id !== id);
      persistData(updated);
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    if (
      window.confirm(
        `Hapus ${selectedIds.length} data transaksi yang dipilih secara permanen?`
      )
    ) {
      const updated = data.filter((item) => !selectedIds.includes(item.id));
      persistData(updated);
      setSelectedIds([]);
    }
  };

  const handleCleanTestRecords = () => {
    const testRecords = data.filter(
      (d) =>
        d.nominal === 0 ||
        d.refTransaksi.toUpperCase().includes("TEST") ||
        d.refTransaksi.toUpperCase().includes("SIM")
    );
    if (testRecords.length === 0) {
      alert("Tidak ditemukan data uji coba/test (Rp 0 atau bertanda TEST).");
      return;
    }
    if (
      window.confirm(
        `Ditemukan ${testRecords.length} data test/simulasi (Rp 0). Bersihkan sekarang?`
      )
    ) {
      const updated = data.filter((d) => !testRecords.some((t) => t.id === d.id));
      persistData(updated);
      setSelectedIds([]);
    }
  };

  const handleResetToDefault = () => {
    if (
      window.confirm(
        "Kembalikan data ke 11 transaksi bawaan awal? (Semua perubahan lokal akan diganti)"
      )
    ) {
      persistData(INITIAL_TRANSACTIONS);
      setSelectedIds([]);
    }
  };

  // Copy ref
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRef(text);
    setTimeout(() => setCopiedRef(null), 2000);
  };

  // Open Add Modal
  const openAddModal = () => {
    const now = new Date();
    const dateStr = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const timeStr = `${String(now.getHours()).padStart(2, "0")}.${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    setFormData({
      email: "",
      nama: "",
      nominal: "45000",
      waktu: `${dateStr}, ${timeStr}`,
      sumber: "lynk_webhook",
      refTransaksi: "ORDER-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    });
    setIsAddModalOpen(true);
  };

  // Open Edit Modal
  const openEditModal = (record: TransactionRecord) => {
    setEditingRecord(record);
    setFormData({
      email: record.email,
      nama: record.nama,
      nominal: record.nominal.toString(),
      waktu: record.waktu,
      sumber: record.sumber,
      refTransaksi: record.refTransaksi,
    });
  };

  // Submit Add/Edit Form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numNominal = parseInt(formData.nominal.replace(/\D/g, ""), 10) || 0;

    if (editingRecord) {
      // Update
      const updated = data.map((item) =>
        item.id === editingRecord.id
          ? {
              ...item,
              email: formData.email,
              nama: formData.nama,
              nominal: numNominal,
              waktu: formData.waktu,
              sumber: formData.sumber,
              refTransaksi: formData.refTransaksi,
            }
          : item
      );
      persistData(updated);
      setEditingRecord(null);
    } else {
      // Create
      const newRec: TransactionRecord = {
        id: "tx-" + Date.now(),
        email: formData.email,
        nama: formData.nama,
        nominal: numNominal,
        waktu: formData.waktu,
        sumber: formData.sumber,
        refTransaksi: formData.refTransaksi,
      };
      persistData([newRec, ...data]);
      setIsAddModalOpen(false);
    }
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["Email Penerima", "Nama Pembeli", "Nominal", "Waktu", "Sumber", "Ref Transaksi"];
    const rows = filteredData.map((d) => [
      `"${d.email}"`,
      `"${d.nama}"`,
      d.nominal,
      `"${d.waktu}"`,
      `"${d.sumber}"`,
      `"${d.refTransaksi}"`,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transaksi_tipikor_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#070e1c] text-slate-100 font-sans pb-16">
      {/* Top Navigation */}
      <header className="bg-[#0b1528] border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-xs font-semibold px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Landing Page</span>
            </Link>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 shadow-md">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white font-serif-title leading-tight">
                  Manajemen Hak Akses & Transaksi
                </h1>
                <p className="text-[11px] text-slate-400">
                  Daftar lisensi dan pembeli ebook Tipikor 2026
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-lg shadow transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Data</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0e1b33] border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Total Pembeli</span>
              <Users className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-black text-white">{stats.totalCount} Data</div>
            <div className="text-[11px] text-slate-400 mt-1">Lisensi terdaftar di sistem</div>
          </div>

          <div className="bg-[#0e1b33] border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Total Pendapatan</span>
              <CreditCard className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400">{formatRupiah(stats.totalAmount)}</div>
            <div className="text-[11px] text-slate-400 mt-1">Omset transaksi valid</div>
          </div>

          <div className="bg-[#0e1b33] border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Transaksi Rp 0 (Test/Free)</span>
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400">{stats.zeroCount} Data</div>
            <div className="text-[11px] text-slate-400 mt-1">Uji coba / lisensi khusus</div>
          </div>

          <div className="bg-[#0e1b33] border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-medium uppercase tracking-wider">Transaksi Berbayar</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-purple-400">{stats.paidCount} Data</div>
            <div className="text-[11px] text-slate-400 mt-1">Nominal &gt; Rp 0</div>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="bg-[#0e1b33] border border-slate-800 rounded-xl p-4 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari email, nama pembeli, atau ref transaksi..."
                className="w-full bg-[#081022] border border-slate-700/80 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-[#081022] p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setFilterNominal("all")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterNominal === "all"
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Semua ({data.length})
              </button>
              <button
                onClick={() => setFilterNominal("paid")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterNominal === "paid"
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Berbayar ({stats.paidCount})
              </button>
              <button
                onClick={() => setFilterNominal("zero")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  filterNominal === "zero"
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Rp 0 / Test ({stats.zeroCount})
              </button>
            </div>
          </div>

          {/* Quick Bulk Action Tools */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSelectAll}
                className="inline-flex items-center gap-1.5 bg-[#081022] hover:bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-md font-medium transition-colors"
              >
                {selectedIds.length === filteredData.length && filteredData.length > 0 ? (
                  <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Square className="w-3.5 h-3.5" />
                )}
                <span>Pilih Semua ({filteredData.length})</span>
              </button>

              {selectedIds.length > 0 && (
                <button
                  onClick={handleDeleteSelected}
                  className="inline-flex items-center gap-1.5 bg-red-900/40 hover:bg-red-900/60 text-red-300 border border-red-700/60 px-3 py-1.5 rounded-md font-semibold transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Terpilih ({selectedIds.length})</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Bersihkan Data Test */}
              <button
                onClick={handleCleanTestRecords}
                title="Hapus semua data simulasi atau Rp 0"
                className="inline-flex items-center gap-1.5 bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-700/50 px-3 py-1.5 rounded-md font-semibold transition-colors"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Bersihkan Data Test</span>
              </button>

              {/* Export CSV */}
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 bg-[#081022] hover:bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-md font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>

              {/* Reset Default */}
              <button
                onClick={handleResetToDefault}
                title="Kembalikan ke 11 data awal"
                className="inline-flex items-center gap-1.5 bg-[#081022] hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 px-2.5 py-1.5 rounded-md font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-[#0e1b33] border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#081022] text-slate-300 font-bold uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 w-10 text-center">
                    <button
                      onClick={handleSelectAll}
                      className="text-slate-400 hover:text-amber-400"
                    >
                      {selectedIds.length === filteredData.length && filteredData.length > 0 ? (
                        <CheckSquare className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-3 w-12 text-slate-500">No</th>
                  <th className="py-3 px-4">Email Penerima</th>
                  <th className="py-3 px-4">Nama Pembeli</th>
                  <th className="py-3 px-4">Nominal</th>
                  <th className="py-3 px-4">Waktu</th>
                  <th className="py-3 px-4">Sumber</th>
                  <th className="py-3 px-4">Ref Transaksi</th>
                  <th className="py-3 px-4 text-right w-24">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-400">
                      <div className="max-w-xs mx-auto space-y-2">
                        <Filter className="w-8 h-8 text-slate-600 mx-auto" />
                        <p className="font-semibold text-white">Tidak ada data transaksi</p>
                        <p className="text-[11px] text-slate-500">
                          Data tidak ditemukan untuk kata kunci atau filter saat ini.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, idx) => {
                    const isSelected = selectedIds.includes(item.id);
                    return (
                      <tr
                        key={item.id}
                        className={`transition-colors hover:bg-slate-800/50 ${
                          isSelected ? "bg-amber-950/20" : ""
                        }`}
                      >
                        {/* Checkbox */}
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => toggleSelectOne(item.id)}
                            className="text-slate-400 hover:text-amber-400"
                          >
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4 text-amber-400" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </button>
                        </td>

                        {/* No */}
                        <td className="py-3 px-3 text-slate-500 font-mono">{idx + 1}</td>

                        {/* Email */}
                        <td className="py-3 px-4 font-medium text-slate-200">
                          <span className="text-sky-300 font-mono text-[11px]">{item.email}</span>
                        </td>

                        {/* Nama */}
                        <td className="py-3 px-4 font-bold text-white">{item.nama}</td>

                        {/* Nominal */}
                        <td className="py-3 px-4">
                          {item.nominal === 0 ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                              Rp 0 (Free/Test)
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-700/60">
                              {formatRupiah(item.nominal)}
                            </span>
                          )}
                        </td>

                        {/* Waktu */}
                        <td className="py-3 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                          {item.waktu}
                        </td>

                        {/* Sumber */}
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/60">
                            {item.sumber}
                          </span>
                        </td>

                        {/* Ref Transaksi */}
                        <td className="py-3 px-4 font-mono text-[11px] text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate max-w-[140px]" title={item.refTransaksi}>
                              {item.refTransaksi}
                            </span>
                            <button
                              onClick={() => copyToClipboard(item.refTransaksi)}
                              title="Salin Ref Transaksi"
                              className="text-slate-500 hover:text-amber-400 transition-colors p-1 rounded"
                            >
                              {copiedRef === item.refTransaksi ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => openEditModal(item)}
                              title="Edit data"
                              className="p-1.5 rounded text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteOne(item.id, item.nama)}
                              title="Hapus data"
                              className="p-1.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-[#081022] px-4 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div>
              Menampilkan <span className="font-bold text-white">{filteredData.length}</span> dari{" "}
              <span className="font-bold text-white">{data.length}</span> total transaksi
            </div>
            <div>Penyimpanan lokal aktif (localStorage)</div>
          </div>
        </div>
      </main>

      {/* MODAL: ADD / EDIT TRANSACTION */}
      {(isAddModalOpen || editingRecord) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0e1b33] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#081022]">
              <h3 className="text-base font-bold text-white font-serif-title">
                {editingRecord ? "Edit Data Transaksi" : "Tambah Transaksi Baru"}
              </h3>
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setEditingRecord(null);
                }}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Penerima</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contoh@gmail.com"
                  className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Nama Pembeli</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Nama Lengkap"
                  className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nominal (Rp)</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={formData.nominal}
                    onChange={(e) => setFormData({ ...formData, nominal: e.target.value })}
                    placeholder="50000"
                    className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Sumber Webhook</label>
                  <input
                    type="text"
                    required
                    value={formData.sumber}
                    onChange={(e) => setFormData({ ...formData, sumber: e.target.value })}
                    placeholder="lynk_webhook"
                    className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Waktu Transaksi</label>
                <input
                  type="text"
                  required
                  value={formData.waktu}
                  onChange={(e) => setFormData({ ...formData, waktu: e.target.value })}
                  placeholder="2 Okt 2026, 02.57"
                  className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Ref / ID Transaksi</label>
                <input
                  type="text"
                  required
                  value={formData.refTransaksi}
                  onChange={(e) => setFormData({ ...formData, refTransaksi: e.target.value })}
                  placeholder="ORDER-XXX atau Hash Ref"
                  className="w-full bg-[#081022] border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-[11px] focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditingRecord(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow transition-colors"
                >
                  {editingRecord ? "Simpan Perubahan" : "Tambahkan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
