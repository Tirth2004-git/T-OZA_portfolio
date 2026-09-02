import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const AgentSignalGraph = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node definitions representing LangGraph agent routing & radar detection
    const nodes = [
      { id: "orchestrator", label: "LangGraph Supervisor", type: "core", relX: 0.5, relY: 0.48, radius: 14 },
      { id: "rag", label: "RAG Context Retriever", type: "agent", relX: 0.22, relY: 0.24, radius: 9 },
      { id: "code", label: "Code Execution Agent", type: "agent", relX: 0.78, relY: 0.22, radius: 9 },
      { id: "radar", label: "DFSAR Radar Signal", type: "sensor", relX: 0.18, relY: 0.76, radius: 10 },
      { id: "vision", label: "OHRC Vision Module", type: "sensor", relX: 0.52, relY: 0.86, radius: 8 },
      { id: "tools", label: "Tool Dispatcher", type: "agent", relX: 0.82, relY: 0.74, radius: 9 },
    ];

    const edges = [
      { from: "orchestrator", to: "rag", speed: 0.008, offset: 0 },
      { from: "orchestrator", to: "code", speed: 0.012, offset: 0.4 },
      { from: "orchestrator", to: "radar", speed: 0.007, offset: 0.2 },
      { from: "orchestrator", to: "vision", speed: 0.009, offset: 0.7 },
      { from: "orchestrator", to: "tools", speed: 0.011, offset: 0.5 },
      { from: "radar", to: "vision", speed: 0.006, offset: 0.1 },
      { from: "rag", to: "code", speed: 0.005, offset: 0.8 },
    ];

    let pulsePackets = edges.map((e) => ({
      edge: e,
      progress: e.offset,
      speed: e.speed,
    }));

    let radarAngle = 0;
    let time = 0;

    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      let hovered = null;
      nodes.forEach((node) => {
        const nx = node.relX * width;
        const ny = node.relY * height;
        const dist = Math.hypot(nx - mouseX, ny - mouseY);
        if (dist < node.radius + 12) {
          hovered = node;
        }
      });
      setActiveNode(hovered);
    };

    const onMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
      setActiveNode(null);
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const isDark = theme === "dark";
    const primaryAccent = isDark ? "#E2984A" : "#C97A2E"; // Copper
    const secondaryAccent = isDark ? "#4FD1C5" : "#0F9488"; // Teal
    const edgeColor = isDark ? "rgba(42, 49, 64, 0.7)" : "rgba(221, 225, 231, 0.9)";
    const nodeBg = isDark ? "#1B212B" : "#FFFFFF";
    const textColor = isDark ? "#EDEFF3" : "#171B22";
    const mutedText = isDark ? "#9AA3B2" : "#5B6472";

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;
      radarAngle += 0.015;

      // Draw faint radar scan circles around center
      const centerX = width * 0.5;
      const centerY = height * 0.48;

      ctx.save();
      ctx.strokeStyle = isDark ? "rgba(79, 209, 197, 0.07)" : "rgba(15, 148, 136, 0.06)";
      ctx.lineWidth = 1;
      [70, 140, 210].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Subtle rotating sweep line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(radarAngle) * 210,
        centerY + Math.sin(radarAngle) * 210
      );
      ctx.strokeStyle = isDark ? "rgba(226, 152, 74, 0.15)" : "rgba(201, 122, 46, 0.12)";
      ctx.stroke();
      ctx.restore();

      // Draw edges
      edges.forEach((edge) => {
        const fromNode = nodes.find((n) => n.id === edge.from);
        const toNode = nodes.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        const x1 = fromNode.relX * width;
        const y1 = fromNode.relY * height;
        const x2 = toNode.relX * width;
        const y2 = toNode.relY * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = edgeColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw animated signal packets along edges
      pulsePackets.forEach((packet) => {
        packet.progress = (packet.progress + packet.speed) % 1;
        const fromNode = nodes.find((n) => n.id === packet.edge.from);
        const toNode = nodes.find((n) => n.id === packet.edge.to);
        if (!fromNode || !toNode) return;

        const x1 = fromNode.relX * width;
        const y1 = fromNode.relY * height;
        const x2 = toNode.relX * width;
        const y2 = toNode.relY * height;

        const curX = x1 + (x2 - x1) * packet.progress;
        const curY = y1 + (y2 - y1) * packet.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 3, 0, Math.PI * 2);
        ctx.fillStyle = packet.edge.from === "orchestrator" ? primaryAccent : secondaryAccent;
        ctx.shadowBlur = isDark ? 8 : 2;
        ctx.shadowColor = packet.edge.from === "orchestrator" ? primaryAccent : secondaryAccent;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node) => {
        const nx = node.relX * width;
        const ny = node.relY * height;
        const isHovered = activeNode?.id === node.id;
        const isCore = node.type === "core";
        const isSensor = node.type === "sensor";

        // Outer pulse ring on hover or core
        if (isCore || isHovered) {
          ctx.beginPath();
          ctx.arc(nx, ny, node.radius + (isHovered ? 8 : 5 + Math.sin(time * 3) * 2), 0, Math.PI * 2);
          ctx.strokeStyle = isCore ? `${primaryAccent}44` : `${secondaryAccent}44`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Node base
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeBg;
        ctx.fill();
        ctx.strokeStyle = isCore ? primaryAccent : isSensor ? secondaryAccent : isHovered ? primaryAccent : isDark ? "#2A3140" : "#DDE1E7";
        ctx.lineWidth = isCore ? 2.5 : 1.8;
        ctx.stroke();

        // Inner pip
        ctx.beginPath();
        ctx.arc(nx, ny, isCore ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isCore ? primaryAccent : secondaryAccent;
        ctx.fill();

        // Labels
        ctx.font = isCore ? "600 11px 'Space Grotesk', sans-serif" : "500 10px 'Inter', sans-serif";
        ctx.fillStyle = isHovered ? primaryAccent : isCore ? textColor : mutedText;
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny + node.radius + 14);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, activeNode]);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-lg border border-theme-border bg-theme-surface/50 backdrop-blur-sm p-3 flex flex-col justify-between overflow-hidden shadow-sm">
      {/* Top Telemetry Bar */}
      <div className="flex items-center justify-between px-2 pt-1 font-mono text-[10px] text-theme-muted tracking-wider border-b border-theme-border/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-theme-teal animate-pulse" />
          <span className="text-theme-text font-semibold">AGENT ROUTING GRAPH</span>
        </div>
        <div className="flex items-center gap-3">
          <span>STATE: ACTIVE</span>
          <span className="hidden sm:inline text-theme-accent">LANGGRAPH :: DFSAR</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative flex-1 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
      </div>

      {/* Bottom Status bar */}
      <div className="flex items-center justify-between px-2 pt-1.5 border-t border-theme-border/60 font-mono text-[9px] text-theme-muted">
        <span>{activeNode ? `NODE: ${activeNode.label.toUpperCase()}` : "HOVER NODE TO INSPECT ROUTE"}</span>
        <span className="text-theme-teal">TELEMETRY: LIVE</span>
      </div>
    </div>
  );
};

export default AgentSignalGraph;
