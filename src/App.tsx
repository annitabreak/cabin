import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plane, 
  Smartphone, 
  Weight, 
  Activity, 
  ShieldAlert, 
  Coffee, 
  ChevronRight, 
  ArrowRightLeft, 
  Wifi, 
  Layers,
  MonitorOff,
  Navigation
} from 'lucide-react';

// Types
interface Section {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');

  const sections: Section[] = [
    {
      id: 'hero',
      title: 'AeroNode',
      subtitle: '重量置换 × 情境干预',
      icon: <Plane className="w-6 h-6" />,
      content: (
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100 uppercase tracking-widest"
            >
              Essential Infographic System
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900"
            >
              AeroNode <span className="gradient-text">System.</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-lg text-slate-500 leading-relaxed"
            >
              针对窄体客机（A321）中长途航线设计的抗疲劳交互系统。
              通过物理结构的“重量置换”与数字界面的“情境干预”，重构客舱人机工学痛点。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FeatureCard 
              icon={<Weight className="text-blue-500" />}
              title="物理干预：重量释放"
              desc="拆除传统沉重显示屏与电子盒，将释放出的配额转化为双层机械承托机构。"
            />
            <FeatureCard 
              icon={<Activity className="text-indigo-500" />}
              title="交互机制：智能伴飞"
              desc="基于W-IFE与Web DRM技术，利用情境感知触发餐食预选与防血栓健康引导。"
            />
          </div>
        </div>
      )
    },
    {
      id: 'insight',
      title: '需求洞察',
      subtitle: '系统错配与体验缺失',
      icon: <MonitorOff className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-800">从“自发补偿”到重构</h3>
              <p className="text-slate-500">通过交叉比对旅客行为，我们发现了两项系统性重度错配：</p>
            </div>
            
            <div className="space-y-6">
              <InsightItem 
                number="01"
                title="下肢承托合法性缺失"
                desc="旅客违规携带充气脚垫反映了缓解静脉淤积的刚需，但航司出于撤离动线考虑禁用，导致需求真空。"
              />
              <InsightItem 
                number="02"
                title="BYOD与物理界面的错位"
                desc="娱乐行为已转向个人设备，传统椅背屏沦为沉重冗余资产，且小桌板高度过低导致颈椎压力。"
              />
            </div>
          </div>
          <div className="glass-card bg-linear-to-br from-blue-50 to-white flex items-center justify-center p-12 min-h-64">
            <div className="relative w-full aspect-square max-w-sm">
              {/* Abstract Infographic: The Missing Gap */}
              <div className="absolute inset-0 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-2xl p-6 w-48 text-center ring-1 ring-black/5">
                <span className="text-sm font-bold text-blue-600">体验真空</span>
                <div className="text-3xl font-bold mt-2">DVT Risk</div>
                <div className="text-xs text-slate-400 mt-1">Deep Vein Thrombosis</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'weight',
      title: '重量置换',
      subtitle: '减法换加法的工程账本',
      icon: <ArrowRightLeft className="w-6 h-6" />,
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">重量交换逻辑</h2>
            <p className="text-slate-500">在极端受限的航空载重指标下，基于“减法换加法”的系统重构方案。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div className="glass-card border-red-50 bg-red-50/10">
              <div className="text-red-500 font-bold text-xl mb-4">(-) 重量释放</div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2 font-medium">
                  <ChevronRight className="w-4 h-4" /> 拆除椅背显示屏 (1.5-2kg)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> 拆除座椅电子盒 (SEB)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> 废除地板线性布网
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="p-4 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-200 animate-pulse">
                <Weight className="w-8 h-8" />
              </div>
            </div>
            
            <div className="glass-card border-green-50 bg-green-50/10">
              <div className="text-green-600 font-bold text-xl mb-4">(+) 承托机构</div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2 font-medium">
                  <ChevronRight className="w-4 h-4" /> 视平线设备磁吸支架
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> 聚碳酸酯高平整面板
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> 底部翻折机械脚踏板
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 bg-slate-100 rounded-xl text-center text-sm text-slate-500">
            结论：减去的数百公斤“死重”，完美覆盖了新增机械结构的重量，且拓宽了排间逃生动线。
          </div>
        </div>
      )
    },
    {
      id: 'digital',
      title: '数字交互',
      subtitle: '情境感知的 BYOD 伴飞系统',
      icon: <Wifi className="w-6 h-6" />,
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InteractiveStep 
              title="无门槛接入"
              icon={<Smartphone className="w-6 h-6 mb-4 text-blue-600" />}
              desc="Web DRM技术无需App，扫码直连，W-IFE局域网保障高清播放。"
            />
            <InteractiveStep 
              title="餐前微交互"
              icon={<Coffee className="w-6 h-6 mb-4 text-orange-500" />}
              desc="静音推送预选卡片，完成即提示“展开餐台”，减少人工催促。"
            />
            <InteractiveStep 
              title="健康姿态提醒"
              icon={<Activity className="w-6 h-6 mb-4 text-green-500" />}
              desc="检测久坐超过90min，弹出气泡建议“放下脚踏板”，主动关怀。"
            />
          </div>
          
          <div className="p-8 glass-card border-blue-100 bg-blue-50/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
              <ShieldAlert className="w-8 h-8 text-red-500 opacity-20" />
            </div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
               安全复位机制 (TTL Signal Lock)
            </h3>
            <p className="text-slate-600 mb-6">接收航电系统信号（滑行、起降、颠簸）后，网页将强制：</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                <span className="text-sm font-medium">强制视频流暂停</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                <span className="text-sm font-medium">全屏安全警告弹框</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      title: '技术实现',
      subtitle: '从底层逻辑到适航安全',
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="bento-grid">
          <div className="md:col-span-2 glass-card">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-blue-600" />
              网页端 DRM 加密技术
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              基于 HTML5 EME 标准。直接调用设备原生原生解密模块（苹果FairPlay、安卓Widevine），免去App下载阻力。
              同时实现系统底层防截屏/录屏，仅在飞行时间戳内有效。
            </p>
          </div>
          <div className="glass-card">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <Navigation className="w-5 h-5 text-indigo-600" />
              实时数据流
            </h4>
            <p className="text-sm text-slate-500">
              通过 WebSocket 或 SSE 技术，将航电总线(ARINC 429)飞行数据实时推送到旅客浏览器，实现毫秒级预警。
            </p>
          </div>
          <div className="glass-card">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-slate-600" />
              物理固定模组
            </h4>
            <p className="text-sm text-slate-500">
              采用环形磁吸阵列日常固定，辅以高阻尼隐藏式机械卡位，应对强颠簸环境。
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentSection = sections.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4 md:p-12 selection:bg-blue-100">
      {/* Navigation Tabs */}
      <nav className="flex items-center justify-between mb-16 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
              AN
            </div>
            <span className="font-bold tracking-tight text-xl hidden sm:inline-block">AERO<span className="text-blue-600">NODE</span></span>
          </div>
          
          <div className="flex gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm font-medium ${
                  activeTab === section.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                {section.icon}
                <span className="hidden md:inline-block">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="text-xs text-slate-400 font-mono hidden lg:block shrink-0">
          DESIGN REPO: V.2024.B
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-1">
                {currentSection?.subtitle}
              </span>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">
                {currentSection?.title}
              </h2>
            </div>
            
            <div className="py-2">
              {currentSection?.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="mt-24 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-2">架构目标</h4>
          <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wider">
            通过减少物理负载提升效能，通过数字干预提升健康阈值，构建航司轻量化运营新标准。
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mx-1"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30 mx-1"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600/10 mx-1"></div>
        </div>
        <div className="text-right">
          <button className="px-6 py-2 bg-slate-900 text-sm text-white rounded-full font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
            获取技术白皮书 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass-card hover:translate-y-[-4px] transition-transform duration-300">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 ring-1 ring-black/5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function InsightItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-3xl font-black text-blue-600/10 select-none pt-1 shrink-0">{number}</div>
      <div>
        <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function InteractiveStep({ title, icon, desc }: { title: string, icon: any, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xs border border-slate-100">
      {icon}
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
