(function () {
  var homeHtml = document.getElementById("article-body").innerHTML;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var NOTES = {
    home: {
      id: "home",
      title: "Sheikh Mehraan",
      group: "",
      meta: "Kashmir - 12 public repos - Updated Nov 27, 2026",
      tags: ["x6871", "mt6895", "mediatek", "android", "littlekernel"],
      summary: "Developer from Kashmir working on MediaTek bootloaders, custom recoveries, Android GKI kernels, and firmware tools around Infinix GT 20 Pro (X6871).",
      links: ["fenrir-x6871", "renkai-x6871", "x6871-recovery-project", "gki-5-10-kernel-builder", "newbies-flasher", "transsion-firmware-toolkit", "transsion-flashable-builder", "onepeek", "ios-emoji-font", "gofile-fast-link-transfer", "winmemorycleaner", "antigravity-jailbreak", "contact"],
      html: homeHtml
    },
    "fenrir-x6871": {
      id: "fenrir-x6871",
      title: "Fenrir-X6871",
      group: "Bootloader & Kernel",
      meta: "C, ARM64 Assembly, Python - Latest release v16.3",
      tags: ["x6871", "mt6895", "mediatek", "littlekernel", "avb", "android-16"],
      summary: "MediaTek LittleKernel payload injector and AVB/verified boot patcher for Infinix GT 20 Pro (X6871) on Android 16.",
      repo: "https://github.com/sheikhmehraann/Fenrir-X6871",
      links: ["home", "renkai-x6871", "x6871-recovery-project"],
      html: [
        "<p>Bootloader research and payload injection toolkit targeting the Infinix GT 20 Pro (<code>X6871</code> / MediaTek Dimensity 8200 Ultimate <code>MT6895</code>) on Android 16 (<code>X6871-OP-16.3</code>).</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Target</span><span class=\"repo-meta-value\">Infinix GT 20 Pro (X6871)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Platform</span><span class=\"repo-meta-value\">MT6895 / Android 16</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Stack</span><span class=\"repo-meta-value\">C, ARM64 asm, Python</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Release</span><span class=\"repo-meta-value\">v16.3</span></div>",
        "</div>",
        "<h2 id=\"what-is-inside\">What is inside</h2>",
        "<ul>",
        "<li><code>payload/</code> - Freestanding AArch64 Stage 1 payload compiled in C and assembly with MMU and fastboot helpers.</li>",
        "<li><code>injector/</code> - MediaTek Container v2 ASN.1 DER <code>cert2</code> override generator (<code>cert_bypass.py</code>) and binary patch injector.</li>",
        "<li><code>tools/</code> - Disabled <code>vbmeta</code> generator (<code>make_disabled_vbmeta.py</code>) and patched LK verifier (<code>verify_lk.py</code>).</li>",
        "</ul>",
        "<h2 id=\"related\">Related projects</h2>",
        "<ul>",
        "<li><a class=\"internal\" href=\"#renkai-x6871\" data-note=\"renkai-x6871\">Renkai-X6871</a> - Android 14 / 15 LittleKernel patches for the same device.</li>",
        "<li><a class=\"internal\" href=\"#x6871-recovery-project\" data-note=\"x6871-recovery-project\">X6871-Recovery-Project</a> - Android 16 custom recovery tree for X6871.</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/Fenrir-X6871\">Open on GitHub</a><a class=\"repo-btn secondary-btn\" href=\"https://github.com/sheikhmehraann/Fenrir-X6871/releases\">Releases</a></div>"
      ].join("")
    },
    "renkai-x6871": {
      id: "renkai-x6871",
      title: "Renkai-X6871",
      group: "Bootloader & Kernel",
      meta: "Python, Batch, Shell - Release V1",
      tags: ["x6871", "mt6895", "mediatek", "littlekernel", "xos14", "xos15"],
      summary: "Patched LittleKernel (lk) and bootloader images for Infinix GT 20 Pro (X6871) on XOS 14 and XOS 15.",
      repo: "https://github.com/sheikhmehraann/Renkai-X6871",
      links: ["home", "fenrir-x6871"],
      html: [
        "<p>Patched LittleKernel (<code>lk</code>) and clean boot logo images for the Infinix GT 20 Pro (<code>X6871</code>) running Android 14 (XOS 14) and Android 15 (XOS 15 builds <code>165SP05</code> and <code>180SP05</code>).</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Target</span><span class=\"repo-meta-value\">Infinix GT 20 Pro (X6871)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">OS Base</span><span class=\"repo-meta-value\">XOS 14 / XOS 15</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Stack</span><span class=\"repo-meta-value\">Python, Batch, Shell</span></div>",
        "</div>",
        "<h2 id=\"patches\">Key patches</h2>",
        "<ul>",
        "<li>Spoofs verified boot state to <code>green</code> and lock state to <code>LKS_LOCK</code> while keeping stock VBMeta intact.</li>",
        "<li>Overrides verification policy across <code>lk</code>, <code>bl2_ext</code>, and <code>aee</code> sub-partitions so custom kernels and recoveries boot without halts.</li>",
        "<li>Extends USB fastboot idle timeout to 10 minutes and ships stock backups plus verification scripts in <code>Tools/</code>.</li>",
        "</ul>",
        "<p>For Android 16 on X6871, see <a class=\"internal\" href=\"#fenrir-x6871\" data-note=\"fenrir-x6871\">Fenrir-X6871</a>.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/Renkai-X6871\">Open on GitHub</a><a class=\"repo-btn secondary-btn\" href=\"https://github.com/sheikhmehraann/Renkai-X6871/releases\">Releases</a></div>"
      ].join("")
    },
    "x6871-recovery-project": {
      id: "x6871-recovery-project",
      title: "X6871-Recovery-Project",
      group: "Bootloader & Kernel",
      meta: "Makefile, C++, Shell, Python, GitHub Actions",
      tags: ["x6871", "mt6895", "android-16", "twrp", "orangefox", "recovery"],
      summary: "Multi-recovery Android 16 (Linux 6.12 GKI) vendor_boot device tree and GitHub Actions builder for Infinix GT 20 Pro.",
      repo: "https://github.com/sheikhmehraann/X6871-Recovery-Project",
      links: ["home", "fenrir-x6871", "newbies-flasher"],
      html: [
        "<p>Self-contained Android 16 (Linux 6.12 GKI) <code>vendor_boot</code> recovery device tree for the Infinix GT 20 Pro (<code>Infinix-X6871</code> / <code>MT6895</code>), supporting multiple recovery projects from a single tree.</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Targets</span><span class=\"repo-meta-value\">TWRP, YARP, OFRP, AERA, PBRP, SHRP</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Kernel ABI</span><span class=\"repo-meta-value\">Linux 6.12 GKI (4K)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Image</span><span class=\"repo-meta-value\">vendor_boot.img (v4, 64 MiB)</span></div>",
        "</div>",
        "<h2 id=\"highlights\">Highlights</h2>",
        "<ul>",
        "<li>Auto-detects the active recovery source tree inside <code>vendorsetup.sh</code> and applies only the matching patches from <code>patches/</code>.</li>",
        "<li>Includes Trustonic AIDL KeyMint/Gatekeeper decryption, Goodix GT9916 touch (<code>adaptive-ts.ko</code>), and AWINIC RichTap haptics (<code>tran_richtap_haptic_hv.ko</code>) with signature-checked ARM64 module patchers in <code>tools/</code>.</li>",
        "<li>Ships a GitHub Actions workflow (<code>build-recoveries.yml</code>) that builds and verifies each <code>vendor_boot.img</code> via <code>tools/verify_vendor_boot.py</code>.</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/X6871-Recovery-Project\">Open on GitHub</a></div>"
      ].join("")
    },
    "gki-5-10-kernel-builder": {
      id: "gki-5-10-kernel-builder",
      title: "gki-5.10-kernel-builder",
      group: "Bootloader & Kernel",
      meta: "Shell, GitHub Actions, LLVM 17",
      tags: ["gki", "kernel", "apatch", "anykernel3", "github-actions"],
      summary: "GitHub Actions workflow compiling Android Common Kernel 5.10.270 with APatch root and AnyKernel3 packaging.",
      repo: "https://github.com/sheikhmehraann/gki-5.10-kernel-builder",
      links: ["home", "ios-emoji-font"],
      html: [
        "<p>Automated GitHub Actions pipeline that builds universal Android Common Kernel 5.10.270 (Rama ACK) using LLVM 17 and Thin LTO, patches the kernel image with APatch (<code>kptools</code>), and packages an AnyKernel3 flashable zip.</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Kernel</span><span class=\"repo-meta-value\">Android GKI 5.10.270</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Root</span><span class=\"repo-meta-value\">APatch (KernelPatch)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Toolchain</span><span class=\"repo-meta-value\">LLVM 17, Thin LTO, BBR/FQ</span></div>",
        "</div>",
        "<h2 id=\"outputs\">Build outputs</h2>",
        "<ul>",
        "<li>Patched <code>Image</code> and <code>Image.gz</code> binaries.</li>",
        "<li><code>Kernel-5.10.270-Universal.zip</code> (AnyKernel3 recovery zip).</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/gki-5.10-kernel-builder\">Open on GitHub</a></div>"
      ].join("")
    },
    "newbies-flasher": {
      id: "newbies-flasher",
      title: "Newbies-Flasher",
      group: "Firmware & Flashing",
      meta: "Python 3.8+, Tkinter, Shell, Batch - Apache-2.0",
      tags: ["android", "recovery", "lptools", "vbmeta", "zstd", "python", "x6871"],
      summary: "Zero-dependency Android recovery-flashable ZIP maker for Windows, Linux, macOS, and Termux.",
      repo: "https://github.com/sheikhmehraann/Newbies-Flasher",
      links: ["home", "transsion-flashable-builder", "x6871-recovery-project"],
      html: [
        "<p>Zero-dependency Python desktop GUI (<code>gui.py</code>) and interactive/flag CLI (<code>main.py</code>) that packages raw, Android sparse, or Zstandard-compressed partition images into hardened recovery-flashable ZIPs for TWRP, OrangeFox, PBRP, and Lineage Recovery.</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Platforms</span><span class=\"repo-meta-value\">Windows, Linux, macOS, Termux</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Dependencies</span><span class=\"repo-meta-value\">Python 3.8+ stdlib only</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">License</span><span class=\"repo-meta-value\">Apache-2.0</span></div>",
        "</div>",
        "<h2 id=\"architecture\">Key implementation details</h2>",
        "<ul>",
        "<li><code>flasher/sparse.py</code> - Pure-Python Android sparse parser that streams unsparsed blocks straight into <code>zstd</code> without writing multi-GB temporary files.</li>",
        "<li><code>flasher/partitions.py</code> - Reads Zstandard uncompressed partition sizes directly from RFC 8878 frame headers in a single file open and auto-fills fields from <code>build.prop</code>.</li>",
        "<li><code>flasher/recovery_script.py</code> - Generates POSIX <code>update-binary</code> scripts with <code>lptools</code> dynamic partition handling, device-mapper unmounting, UFS <code>force_ro</code> unlocking, and ZIP64 entry ordering below 4 GiB.</li>",
        "<li><code>flasher/avb.py</code> - Supports AVB 2.0 <code>skip</code>, <code>disable</code>, and <code>enable</code> modes (including standalone flashable zips) via live <code>avbctl</code> checks and direct <code>AVB0</code> header patching.</li>",
        "<li>Includes a unit test suite in <code>tests/test_newbies_flasher.py</code>.</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/Newbies-Flasher\">Open on GitHub</a></div>"
      ].join("")
    },
    "transsion-firmware-toolkit": {
      id: "transsion-firmware-toolkit",
      title: "Transsion-Firmware-Toolkit",
      group: "Firmware & Flashing",
      meta: "Python, Protobuf, GitHub Actions - Apache-2.0",
      tags: ["transsion", "infinix", "tecno", "mediatek", "ota", "python"],
      summary: "CLI and GitHub Actions scripts for probing, extracting, repacking (.tar.zst), and flashing Transsion OTAs.",
      repo: "https://github.com/sheikhmehraann/Transsion-Firmware-Toolkit",
      links: ["home", "transsion-flashable-builder", "gofile-fast-link-transfer"],
      html: [
        "<p>Python CLI and GitHub Actions workflow suite for Transsion (Infinix, Tecno, itel) and MediaTek firmware handling.</p>",
        "<h2 id=\"modules\">Modules</h2>",
        "<ul>",
        "<li><code>prober/</code> - FOTA and Google Check-in protobuf OTA probing plus incremental-to-full resolution.</li>",
        "<li><code>extractor/</code> - Full and incremental <code>payload.bin</code> extraction and Zstandard (<code>.tar.zst</code>) repacking.</li>",
        "<li><code>flasher/</code> and <code>vendor_fix/</code> - Fastboot dynamic-partition flasher and 64-bit vendor conversion helper.</li>",
        "<li><code>uploader/</code> - Direct GoFile upload integration for cloud runner outputs.</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/Transsion-Firmware-Toolkit\">Open on GitHub</a></div>"
      ].join("")
    },
    "transsion-flashable-builder": {
      id: "transsion-flashable-builder",
      title: "transsion-flashable-builder",
      group: "Firmware & Flashing",
      meta: "Python, GitHub Actions, lptools - MIT",
      tags: ["transsion", "infinix", "lptools", "recovery", "android"],
      summary: "Converts Transsion stock firmware dumps into A/B recovery-flashable zips via lptools and zstd.",
      repo: "https://github.com/sheikhmehraann/transsion-flashable-builder",
      links: ["home", "newbies-flasher", "transsion-firmware-toolkit"],
      html: [
        "<p>Cloud (GitHub Actions) and local Python pipeline that unpacks raw Transsion stock firmware packages and rebuilds them into A/B dual-slot recovery-flashable ZIPs using <code>lptools</code> and multi-threaded Zstandard compression, with GoFile and Hugging Face upload helpers.</p>",
        "<p>For general local/cross-platform recovery ZIP packaging from partition images, see the newer <a class=\"internal\" href=\"#newbies-flasher\" data-note=\"newbies-flasher\">Newbies-Flasher</a>.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/transsion-flashable-builder\">Open on GitHub</a></div>"
      ].join("")
    },
    onepeek: {
      id: "onepeek",
      title: "OnePeek",
      group: "Mods & Utilities",
      meta: "Kotlin, Gradle, libxposed API 102 - v0.3.0-beta.1",
      tags: ["lsposed", "libxposed", "kotlin", "android", "google-one"],
      summary: "Minimal libxposed API 102 module scoped strictly to Google One that inspects Play Billing offers and free trials.",
      repo: "https://github.com/sheikhmehraann/OnePeek",
      links: ["home"],
      html: [
        "<p>Minimal libxposed API 102 (LSPosed) module scoped strictly to Google One (<code>com.google.android.apps.subscriptions.red</code>). Adds an <code>Offers</code> button that scans Google Play Billing for available subscription offers and free trials returned to the active Play account, shows raw pricing phases, and opens Google Play's official checkout sheet after manual confirmation.</p>",
        "<div class=\"repo-meta-grid\">",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Language</span><span class=\"repo-meta-value\">Kotlin (Gradle)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">API</span><span class=\"repo-meta-value\">libxposed API 102 (minSdk 26)</span></div>",
        "<div class=\"repo-meta-item\"><span class=\"repo-meta-label\">Latest</span><span class=\"repo-meta-value\">v0.3.0-beta.1</span></div>",
        "</div>",
        "<h2 id=\"how-it-works\">How it works</h2>",
        "<ul>",
        "<li><code>SkuCatalog.kt</code> - 110-SKU categorized catalog queried across isolated 18-SKU Play Billing batches, plus inline custom SKU lookup.</li>",
        "<li><code>MainHook.kt</code> - Protective hook on <code>Bundle.putStringArrayList</code> (<code>ITEM_ID_LIST</code>) to passively capture server-pushed SKUs without touching obfuscated app classes.</li>",
        "<li><code>OfferPricing.kt</code> - Classifies <code>FREE_TRIAL</code> (with EFT detection), <code>INTRO_PROMO</code> (normalized daily-rate discount math), and <code>BASE_PLAN</code>, backed by JUnit 4 tests and CI/release workflows with <code>SHA256SUMS.txt</code>.</li>",
        "</ul>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/OnePeek\">Open on GitHub</a><a class=\"repo-btn secondary-btn\" href=\"https://github.com/sheikhmehraann/OnePeek/releases\">Releases</a></div>"
      ].join("")
    },
    "ios-emoji-font": {
      id: "ios-emoji-font",
      title: "IOS-Emoji-Font",
      group: "Mods & Utilities",
      meta: "Magisk / KernelSU / APatch, Python, Shell - v2.0-ultra",
      tags: ["magisk", "kernelsu", "apatch", "android", "fonts"],
      summary: "Systemless module replacing Android system fonts with Apple SF Pro and iOS emoji, plus multilingual metric patch tools.",
      repo: "https://github.com/sheikhmehraann/IOS-Emoji-Font",
      links: ["home", "gki-5-10-kernel-builder"],
      html: [
        "<p>Systemless module for Magisk, KernelSU, and APatch that replaces Android system typography with Apple SF Pro and Apple Color Emoji across <code>/system</code>, <code>/product</code>, <code>/system_ext</code>, and <code>/vendor</code>, with <code>post-fs-data</code> binding and GMS font override handling.</p>",
        "<p>Includes multilingual Noto font files (Devanagari, Gurmukhi, Bengali, Gujarati, Tamil, Telugu, Malayalam, Kannada, Sinhala, Nastaliq Urdu, Arabic, Hebrew) and Python metric-patching scripts.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/IOS-Emoji-Font\">Open on GitHub</a><a class=\"repo-btn secondary-btn\" href=\"https://github.com/sheikhmehraann/IOS-Emoji-Font/releases\">Releases</a></div>"
      ].join("")
    },
    "gofile-fast-link-transfer": {
      id: "gofile-fast-link-transfer",
      title: "gofile-fast-link-transfer",
      group: "Mods & Utilities",
      meta: "Python, curl, GitHub Actions - MIT",
      tags: ["gofile", "python", "curl", "github-actions"],
      summary: "Multi-connection CLI, Web UI, and GitHub Actions tool for transferring Google Drive, SourceForge, MediaFire, and direct links to GoFile.",
      repo: "https://github.com/sheikhmehraann/gofile-fast-link-transfer",
      links: ["home", "transsion-firmware-toolkit"],
      html: [
        "<p>Link-to-GoFile transfer engine available as a CLI (<code>cli.py</code>), local web UI (<code>web_app.py</code>), and GitHub Actions workflow. Resolves Google Drive, SourceForge, MediaFire, Dropbox, and direct URLs, downloads using parallel HTTP range streams, and uploads via native <code>curl</code> with automatic multi-server GoFile fallback.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/gofile-fast-link-transfer\">Open on GitHub</a></div>"
      ].join("")
    },
    winmemorycleaner: {
      id: "winmemorycleaner",
      title: "WinMemoryCleaner",
      group: "Mods & Utilities",
      meta: "C#, WPF, Windows NT API - Release V1",
      tags: ["windows", "csharp", "wpf"],
      summary: "Modified fork of Igor Mundstein's WinMemoryCleaner with extra Windows tweaks and tray-only behavior.",
      repo: "https://github.com/sheikhmehraann/WinMemoryCleaner",
      links: ["home"],
      html: [
        "<p>Personal modified fork of Igor Mundstein's open-source WinMemoryCleaner (C# / WPF). Adds native Windows tweak toggles, a compact 2-column settings layout for high-DPI screens, minimize/close-to-tray behavior, and sequential task scheduling.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/WinMemoryCleaner\">Open on GitHub</a><a class=\"repo-btn secondary-btn\" href=\"https://github.com/sheikhmehraann/WinMemoryCleaner/releases\">Releases</a></div>"
      ].join("")
    },
    "antigravity-jailbreak": {
      id: "antigravity-jailbreak",
      title: "Antigravity-Jailbreak",
      group: "Mods & Utilities",
      meta: "Python, Batch, Markdown - MIT",
      tags: ["antigravity", "agents-md", "python"],
      summary: "System prompt profiles and a Python/Batch switcher for Google Antigravity AGENTS.md files.",
      repo: "https://github.com/sheikhmehraann/Antigravity-Jailbreak",
      links: ["home"],
      html: [
        "<p>Collection of system instruction profiles and a small switcher utility (<code>set-rules.py</code>, <code>set-rules.bat</code>, <code>setup.bat</code>) that syncs rule files across global and workspace <code>AGENTS.md</code> paths for Google Antigravity.</p>",
        "<div class=\"repo-action-row\"><a class=\"repo-btn\" href=\"https://github.com/sheikhmehraann/Antigravity-Jailbreak\">Open on GitHub</a></div>"
      ].join("")
    },
    contact: {
      id: "contact",
      title: "Where to find me",
      group: "",
      meta: "Sheikh Mehraan - Kashmir",
      tags: ["sheikhmehraann", "sheikhmehraan", "mehraann19"],
      summary: "Official links for Sheikh Mehraan across GitHub, Telegram, SourceForge, and email.",
      links: ["home"],
      html: [
        "<p>I go by <strong>Sheikh Mehraan</strong>, <code>SheikhMehraan</code>, <code>sheikhmehraann</code>, <code>sheikh mehraann</code>, <code>sheikhmehraan</code>, <code>Mehraann</code>, and <code>mehraann19</code>. These are my real accounts:</p>",
        "<ul>",
        "<li>Website: <a href=\"https://sheikhmehraann.github.io/\">sheikhmehraann.github.io</a></li>",
        "<li>GitHub: <a rel=\"me\" href=\"https://github.com/sheikhmehraann\">github.com/sheikhmehraann</a> (<code>@sheikhmehraann</code>)</li>",
        "<li>Telegram: <a rel=\"me\" href=\"https://t.me/mehraann19\">t.me/mehraann19</a> (<code>@mehraann19</code>)</li>",
        "<li>SourceForge: <a rel=\"me\" href=\"https://sourceforge.net/u/mehraann19/profile/\">sourceforge.net/u/mehraann19</a> (<code>mehraann19</code>)</li>",
        "<li>Email: <a href=\"mailto:mehraann.19@gmail.com\">mehraann.19@gmail.com</a></li>",
        "</ul>"
      ].join("")
    }
  };

  var currentNoteId = "home";
  var centerEl = document.querySelector(".center");
  var titleEl = document.getElementById("article-title");
  var metaEl = document.getElementById("content-meta");
  var tagsEl = document.getElementById("article-tags");
  var crumbsEl = document.getElementById("breadcrumbs");
  var bodyEl = document.getElementById("article-body");
  var tocListEl = document.getElementById("toc-list");
  var backlinksListEl = document.getElementById("backlinks-list");
  var progressEl = document.getElementById("reading-progress");
  var popoverEl = document.getElementById("note-popover");

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function getBacklinks(noteId) {
    var list = [];
    Object.keys(NOTES).forEach(function (k) {
      if (k !== noteId && NOTES[k].links.indexOf(noteId) !== -1) {
        list.push(NOTES[k]);
      }
    });
    return list;
  }

  function renderToc() {
    tocListEl.innerHTML = "";
    var headings = bodyEl.querySelectorAll("h2, h3");
    if (!headings.length) {
      tocListEl.innerHTML = "<li style=\"color:var(--gray);font-size:0.84rem;padding-left:0.75rem\">No sections</li>";
      return;
    }
    headings.forEach(function (h, idx) {
      if (!h.id) {
        h.id = "section-" + idx;
      }
      var li = document.createElement("li");
      li.className = h.tagName === "H3" ? "depth-3" : "depth-2";
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      if (idx === 0) a.classList.add("in-view");
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        h.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      });
      li.appendChild(a);
      tocListEl.appendChild(li);
    });
  }

  function renderBacklinks(noteId) {
    backlinksListEl.innerHTML = "";
    var items = getBacklinks(noteId);
    if (!items.length) {
      backlinksListEl.innerHTML = "<li style=\"color:var(--gray);font-size:0.84rem\">No backlinks</li>";
      return;
    }
    items.forEach(function (n) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + n.id;
      a.className = "internal";
      a.textContent = n.title;
      a.setAttribute("data-note", n.id);
      li.appendChild(a);
      backlinksListEl.appendChild(li);
    });
  }

  function setActiveExplorer(noteId) {
    var links = document.querySelectorAll(".explorer-link");
    links.forEach(function (a) {
      var match = a.getAttribute("data-note") === noteId;
      a.classList.toggle("active", match);
      if (match) {
        var folder = a.closest(".folder");
        if (folder) {
          folder.classList.add("open");
          var btn = folder.querySelector(".folder-toggle");
          if (btn) btn.setAttribute("aria-expanded", "true");
        }
      }
    });
  }

  function triggerNoteEntrance() {
    if (reducedMotion || !centerEl) return;
    centerEl.classList.remove("note-entering");
    void centerEl.offsetWidth;
    centerEl.classList.add("note-entering");
  }

  function hidePopover() {
    if (popoverTimer) {
      clearTimeout(popoverTimer);
      popoverTimer = null;
    }
    popoverEl.classList.remove("visible");
    popoverEl.setAttribute("aria-hidden", "true");
  }

  function openNote(noteId, pushHash) {
    hidePopover();
    var note = NOTES[noteId] || NOTES.home;
    currentNoteId = note.id;
    titleEl.textContent = note.title;
    metaEl.textContent = note.meta;

    if (note.id === "home") {
      crumbsEl.innerHTML = "<span>Home</span>";
      document.title = "Sheikh Mehraan (sheikhmehraann / sheikhmehraan)";
    } else if (note.group) {
      crumbsEl.innerHTML = "<a href=\"#home\" data-note=\"home\">Home</a><span>/</span><span>" + note.group + "</span><span>/</span><span>" + note.title + "</span>";
      document.title = note.title + " - Sheikh Mehraan";
    } else {
      crumbsEl.innerHTML = "<a href=\"#home\" data-note=\"home\">Home</a><span>/</span><span>" + note.title + "</span>";
      document.title = note.title + " - Sheikh Mehraan";
    }

    tagsEl.innerHTML = note.tags.map(function (t) {
      return "<li><a class=\"internal tag-link\" href=\"#search\" data-tag=\"" + t + "\">" + t + "</a></li>";
    }).join("");

    bodyEl.innerHTML = note.html;
    renderToc();
    renderBacklinks(note.id);
    setActiveExplorer(note.id);
    window.scrollTo(0, 0);
    updateScrollState();
    triggerNoteEntrance();

    var explorer = document.getElementById("explorer");
    var mBtn = document.getElementById("mobile-explorer-btn");
    explorer.classList.remove("mobile-open");
    mBtn.setAttribute("aria-expanded", "false");

    if (pushHash) {
      var nextHash = note.id === "home" ? "" : "#" + note.id;
      if (window.location.hash !== nextHash) {
        history.pushState(null, "", nextHash || window.location.pathname);
      }
    }
    if (localGraph) localGraph.setActive(note.id);
    if (globalGraph) globalGraph.setActive(note.id);
  }

  var popoverTimer = null;

  function showPopoverFor(linkEl) {
    var id = linkEl.getAttribute("data-note");
    var note = NOTES[id];
    if (!note || id === currentNoteId) return;
    var tagsHtml = note.tags.slice(0, 4).map(function (t) {
      return "<span class=\"popover-tag\">#" + escapeHtml(t) + "</span>";
    }).join("");
    popoverEl.innerHTML = "<h4>" + escapeHtml(note.title) + "</h4><p class=\"popover-meta\">" + escapeHtml(note.meta) + "</p><p class=\"popover-summary\">" + escapeHtml(note.summary) + "</p><div class=\"popover-tags\">" + tagsHtml + "</div>";

    var rect = linkEl.getBoundingClientRect();
    var popW = 320;
    var left = Math.max(12, Math.min(window.innerWidth - popW - 12, rect.left));
    var placeAbove = rect.bottom + 185 > window.innerHeight && rect.top > 195;
    popoverEl.style.left = left + "px";
    if (placeAbove) {
      popoverEl.style.top = Math.max(12, rect.top - 172) + "px";
    } else {
      popoverEl.style.top = (rect.bottom + 10) + "px";
    }
    popoverEl.setAttribute("aria-hidden", "false");
    popoverEl.classList.add("visible");
  }

  document.addEventListener("mouseover", function (ev) {
    if (window.innerWidth <= 800) return;
    var link = ev.target.closest("article a.internal[data-note], #backlinks a.internal[data-note]");
    if (!link) return;
    if (popoverTimer) clearTimeout(popoverTimer);
    popoverTimer = setTimeout(function () {
      showPopoverFor(link);
    }, 170);
  });

  document.addEventListener("mouseout", function (ev) {
    var link = ev.target.closest("article a.internal[data-note], #backlinks a.internal[data-note]");
    if (link) hidePopover();
  });

  document.addEventListener("click", function (ev) {
    var tagLink = ev.target.closest("[data-tag]");
    if (tagLink) {
      ev.preventDefault();
      hidePopover();
      openSearch(tagLink.getAttribute("data-tag"));
      return;
    }
    var noteLink = ev.target.closest("[data-note]");
    if (noteLink) {
      ev.preventDefault();
      openNote(noteLink.getAttribute("data-note"), true);
    }
  });

  window.addEventListener("popstate", function () {
    var raw = window.location.hash.replace(/^#/, "");
    if (NOTES[raw]) {
      openNote(raw, false);
    } else {
      openNote("home", false);
    }
  });

  var themeBtn = document.getElementById("theme-toggle-btn");
  var themeResetTimer = null;
  themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("saved-theme") === "dark" ? "dark" : "light";
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition");
    document.documentElement.setAttribute("saved-theme", next);
    localStorage.setItem("theme", next);
    themeBtn.classList.remove("spin");
    void themeBtn.offsetWidth;
    themeBtn.classList.add("spin");
    if (themeResetTimer) clearTimeout(themeResetTimer);
    themeResetTimer = setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
      themeBtn.classList.remove("spin");
    }, 300);
    if (localGraph) localGraph.draw();
    if (globalGraph) globalGraph.draw();
  });

  function setReaderMode(on) {
    document.documentElement.setAttribute("reader-mode", on ? "on" : "off");
  }

  document.getElementById("reader-toggle-btn").addEventListener("click", function () {
    var isOn = document.documentElement.getAttribute("reader-mode") === "on";
    setReaderMode(!isOn);
  });

  document.getElementById("reader-exit-btn").addEventListener("click", function () {
    setReaderMode(false);
  });

  document.getElementById("explorer-collapse-btn").addEventListener("click", function () {
    var ex = document.getElementById("explorer");
    var collapsed = ex.classList.toggle("collapsed");
    this.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });

  document.getElementById("mobile-explorer-btn").addEventListener("click", function () {
    var ex = document.getElementById("explorer");
    var open = ex.classList.toggle("mobile-open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".folder-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest(".folder");
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.getElementById("toc-toggle-btn").addEventListener("click", function () {
    var toc = document.getElementById("toc");
    var collapsed = toc.classList.toggle("collapsed");
    this.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });

  var searchModal = document.getElementById("search-modal");
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var searchPreview = document.getElementById("search-preview");
  var searchItems = [];
  var focusedIndex = 0;

  function highlightText(text, query) {
    var safe = escapeHtml(text);
    if (!query) return safe;
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp("(" + escaped + ")", "gi"), "<mark>$1</mark>");
  }

  function renderPreview(note, query) {
    if (!note) {
      searchPreview.innerHTML = "<p style=\"color:var(--gray)\">No results found.</p>";
      return;
    }
    var plain = note.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    var tagsHtml = note.tags.map(function (t) {
      return "<span class=\"internal tag-link\" style=\"background:var(--highlight);padding:0.1rem 0.4rem;border-radius:4px;font-size:0.8rem;margin-right:0.3rem;color:var(--secondary)\">#" + escapeHtml(t) + "</span>";
    }).join("");
    searchPreview.innerHTML = "<h3>" + highlightText(note.title, query) + "</h3><p style=\"color:var(--gray);font-size:0.84rem;margin-bottom:0.6rem\">" + escapeHtml(note.meta) + "</p><div style=\"margin-bottom:0.8rem\">" + tagsHtml + "</div><p>" + highlightText(plain, query) + "</p>";
  }

  function runSearch(rawQuery) {
    var q = (rawQuery || "").trim().toLowerCase();
    searchItems = Object.keys(NOTES).map(function (k) { return NOTES[k]; }).filter(function (n) {
      if (!q) return true;
      var hay = (n.title + " " + n.group + " " + n.summary + " " + n.tags.join(" ") + " " + n.html.replace(/<[^>]+>/g, " ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    focusedIndex = 0;
    searchResults.innerHTML = "";
    if (!searchItems.length) {
      searchResults.innerHTML = "<p style=\"padding:0.75rem;color:var(--gray);font-size:0.9rem\">No matches.</p>";
      renderPreview(null, q);
      return;
    }
    searchItems.forEach(function (n, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "search-result-card" + (idx === 0 ? " focused" : "");
      btn.innerHTML = "<h4>" + highlightText(n.title, q) + "</h4><p>" + highlightText(n.summary, q) + "</p>";
      btn.addEventListener("mouseenter", function () {
        focusedIndex = idx;
        updateFocusCard(q);
      });
      btn.addEventListener("click", function () {
        closeSearch();
        openNote(n.id, true);
      });
      searchResults.appendChild(btn);
    });
    renderPreview(searchItems[0], q);
  }

  function updateFocusCard(q) {
    var cards = searchResults.querySelectorAll(".search-result-card");
    cards.forEach(function (c, i) {
      c.classList.toggle("focused", i === focusedIndex);
    });
    if (cards[focusedIndex]) {
      cards[focusedIndex].scrollIntoView({ block: "nearest" });
    }
    if (searchItems[focusedIndex]) {
      renderPreview(searchItems[focusedIndex], q);
    }
  }

  function openSearch(initial) {
    hidePopover();
    searchModal.classList.add("active");
    searchModal.setAttribute("aria-hidden", "false");
    searchInput.value = initial || "";
    runSearch(searchInput.value);
    setTimeout(function () { searchInput.focus(); }, 30);
  }

  function closeSearch() {
    searchModal.classList.remove("active");
    searchModal.setAttribute("aria-hidden", "true");
  }

  document.getElementById("search-open-btn").addEventListener("click", function () {
    openSearch("");
  });

  searchModal.addEventListener("click", function (ev) {
    if (ev.target === searchModal) closeSearch();
  });

  searchInput.addEventListener("input", function () {
    runSearch(searchInput.value);
  });

  searchInput.addEventListener("keydown", function (ev) {
    if (!searchItems.length) return;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      focusedIndex = (focusedIndex + 1) % searchItems.length;
      updateFocusCard(searchInput.value.trim());
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      focusedIndex = (focusedIndex - 1 + searchItems.length) % searchItems.length;
      updateFocusCard(searchInput.value.trim());
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      var target = searchItems[focusedIndex];
      if (target) {
        closeSearch();
        openNote(target.id, true);
      }
    }
  });

  var globalGraphModal = document.getElementById("global-graph-modal");

  function openGlobalGraph() {
    hidePopover();
    globalGraphModal.classList.add("active");
    globalGraphModal.setAttribute("aria-hidden", "false");
    setTimeout(function () {
      if (globalGraph) globalGraph.resize();
    }, 30);
  }

  function closeGlobalGraph() {
    globalGraphModal.classList.remove("active");
    globalGraphModal.setAttribute("aria-hidden", "true");
  }

  document.getElementById("graph-expand-btn").addEventListener("click", openGlobalGraph);
  document.getElementById("global-graph-close-btn").addEventListener("click", closeGlobalGraph);
  globalGraphModal.addEventListener("click", function (ev) {
    if (ev.target === globalGraphModal) closeGlobalGraph();
  });

  document.addEventListener("keydown", function (ev) {
    if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
      ev.preventDefault();
      if (searchModal.classList.contains("active")) closeSearch();
      else openSearch("");
    } else if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "g") {
      ev.preventDefault();
      if (globalGraphModal.classList.contains("active")) closeGlobalGraph();
      else openGlobalGraph();
    } else if (ev.key === "Escape") {
      closeSearch();
      closeGlobalGraph();
      hidePopover();
    }
  });

  function createGraph(canvas, isGlobal) {
    var ctx = canvas.getContext("2d");
    var ids = Object.keys(NOTES);
    var nodes = ids.map(function (id, i) {
      var angle = (i / ids.length) * Math.PI * 2;
      var dist = id === "home" ? 0 : (isGlobal ? 150 : 66) + (i % 3) * (isGlobal ? 38 : 14);
      var baseR = id === "home" ? (isGlobal ? 7.2 : 5.6) : (isGlobal ? 5 : 3.9);
      return {
        id: id,
        label: NOTES[id].title,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        baseR: baseR,
        curR: baseR,
        curAlpha: 1
      };
    });

    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });

    var edgeSet = {};
    var edges = [];
    ids.forEach(function (id) {
      NOTES[id].links.forEach(function (t) {
        if (!byId[t]) return;
        var key = id < t ? id + "|" + t : t + "|" + id;
        if (!edgeSet[key]) {
          edgeSet[key] = true;
          edges.push([byId[id], byId[t]]);
        }
      });
    });

    var width = 260;
    var height = 240;
    var dpr = window.devicePixelRatio || 1;
    var activeId = currentNoteId;
    var hovered = null;
    var dragging = null;
    var panning = false;
    var panStartX = 0;
    var panStartY = 0;
    var panX = 0;
    var panY = 0;
    var zoom = 1;
    var moved = false;
    var ticks = 0;

    function colors() {
      var st = getComputedStyle(document.documentElement);
      return {
        light: st.getPropertyValue("--light").trim() || "#faf8f8",
        surface: st.getPropertyValue("--surface").trim() || "#ffffff",
        secondary: st.getPropertyValue("--secondary").trim() || "#284b63",
        tertiary: st.getPropertyValue("--tertiary").trim() || "#587971",
        gray: st.getPropertyValue("--gray").trim() || "#727272",
        lightgray: st.getPropertyValue("--lightgray").trim() || "#e5e5e5",
        dark: st.getPropertyValue("--dark").trim() || "#2b2b2b"
      };
    }

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      width = Math.max(rect.width, 200);
      height = Math.max(rect.height, 200);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ticks = 0;
      if (isGlobal) {
        panX = 0;
        panY = 0;
        zoom = 1;
      }
      draw(performance.now());
    }

    function isNeighbor(a, b) {
      if (a.id === b.id) return true;
      for (var i = 0; i < edges.length; i++) {
        if ((edges[i][0] === a && edges[i][1] === b) || (edges[i][1] === a && edges[i][0] === b)) {
          return true;
        }
      }
      return false;
    }

    function screenToWorld(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: (clientX - rect.left - width / 2 - panX) / zoom,
        y: (clientY - rect.top - height / 2 - panY) / zoom
      };
    }

    function step() {
      var repel = isGlobal ? 2800 : 880;
      var spring = isGlobal ? 0.012 : 0.018;
      var rest = isGlobal ? 128 : 64;
      var centerPull = 0.012;

      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          var d2 = dx * dx + dy * dy + 16;
          var f = repel / d2;
          var d = Math.sqrt(d2);
          var fx = (dx / d) * f;
          var fy = (dy / d) * f;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }
      }

      for (var k = 0; k < edges.length; k++) {
        var s = edges[k][0];
        var t = edges[k][1];
        var edx = t.x - s.x;
        var edy = t.y - s.y;
        var dist = Math.sqrt(edx * edx + edy * edy) || 1;
        var diff = (dist - rest) * spring;
        var ex = (edx / dist) * diff;
        var ey = (edy / dist) * diff;
        s.vx += ex;
        s.vy += ey;
        t.vx -= ex;
        t.vy -= ey;
      }

      var maxX = width * 0.44;
      var maxY = height * 0.42;
      for (var m = 0; m < nodes.length; m++) {
        var n = nodes[m];
        if (n === dragging) {
          n.vx = 0;
          n.vy = 0;
          continue;
        }
        n.vx -= n.x * centerPull;
        n.vy -= n.y * centerPull;
        n.vx *= 0.84;
        n.vy *= 0.84;
        n.x = Math.max(-maxX, Math.min(maxX, n.x + n.vx));
        n.y = Math.max(-maxY, Math.min(maxY, n.y + n.vy));
      }
    }

    function drawPillLabel(text, x, y, c, fontSize) {
      ctx.font = "600 " + fontSize + "px \"Source Sans 3\", sans-serif";
      var metrics = ctx.measureText(text);
      var padX = 5;
      var boxW = metrics.width + padX * 2;
      var boxH = fontSize + 5;
      var bx = x - boxW / 2;
      var by = y - boxH + 3;
      ctx.fillStyle = c.surface;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, boxH, 4);
      ctx.fill();
      ctx.strokeStyle = c.lightgray;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.fillStyle = c.dark;
      ctx.textAlign = "center";
      ctx.fillText(text, x, y);
    }

    function draw(now) {
      var c = colors();
      var cx = width / 2 + panX;
      var cy = height / 2 + panY;
      var pulse = reducedMotion ? 0 : (Math.sin((now || 0) * 0.0024) + 1) * 0.5;
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < edges.length; i++) {
        var a = edges[i][0];
        var b = edges[i][1];
        var activeEdge = hovered && (a === hovered || b === hovered);
        var currentEdge = !hovered && (a.id === activeId || b.id === activeId);
        ctx.beginPath();
        ctx.moveTo(cx + a.x * zoom, cy + a.y * zoom);
        ctx.lineTo(cx + b.x * zoom, cy + b.y * zoom);
        ctx.strokeStyle = activeEdge ? c.tertiary : (currentEdge ? c.secondary : c.lightgray);
        ctx.globalAlpha = hovered ? (activeEdge ? 0.92 : 0.16) : (currentEdge ? 0.55 : 0.72);
        ctx.lineWidth = activeEdge ? 1.6 : 1;
        ctx.stroke();
      }

      for (var j = 0; j < nodes.length; j++) {
        var n = nodes[j];
        var connected = !hovered || isNeighbor(hovered, n);
        var targetAlpha = connected ? 1 : 0.18;
        var targetR = n.baseR * (n === hovered ? 1.38 : (n.id === activeId ? 1.18 : 1));
        n.curAlpha += (targetAlpha - n.curAlpha) * 0.18;
        n.curR += (targetR - n.curR) * 0.2;

        var nx = cx + n.x * zoom;
        var ny = cy + n.y * zoom;

        if (n.id === activeId && !reducedMotion) {
          ctx.globalAlpha = 0.14 + pulse * 0.18;
          ctx.beginPath();
          ctx.arc(nx, ny, n.curR + 3 + pulse * 3.5, 0, Math.PI * 2);
          ctx.strokeStyle = c.tertiary;
          ctx.lineWidth = 1.25;
          ctx.stroke();
        }

        if (n === hovered) {
          ctx.globalAlpha = 0.22;
          ctx.beginPath();
          ctx.arc(nx, ny, n.curR + 5, 0, Math.PI * 2);
          ctx.fillStyle = c.secondary;
          ctx.fill();
        }

        ctx.globalAlpha = n.curAlpha;
        ctx.beginPath();
        ctx.arc(nx, ny, n.curR, 0, Math.PI * 2);
        if (n.id === activeId) ctx.fillStyle = c.tertiary;
        else if (n === hovered) ctx.fillStyle = c.secondary;
        else ctx.fillStyle = n.id === "home" ? c.secondary : c.gray;
        ctx.fill();
      }

      for (var k = 0; k < nodes.length; k++) {
        var ln = nodes[k];
        var showLabel = isGlobal || ln === hovered || ln.id === activeId || ln.id === "home";
        if (!showLabel) continue;
        var lx = cx + ln.x * zoom;
        var ly = cy + ln.y * zoom - ln.curR - 7;
        ctx.globalAlpha = ln.curAlpha;
        if (ln === hovered || ln.id === activeId) {
          drawPillLabel(ln.label, lx, ly, c, isGlobal ? 11.5 : 10.5);
        } else {
          ctx.font = (isGlobal ? "11.5px " : "10.5px ") + "\"Source Sans 3\", sans-serif";
          ctx.fillStyle = c.dark;
          ctx.textAlign = "center";
          ctx.fillText(ln.label, lx, ly);
        }
      }
      ctx.globalAlpha = 1;
    }

    function findNode(ev) {
      var pt = screenToWorld(ev.clientX, ev.clientY);
      var hit = null;
      var best = 18 / zoom;
      for (var i = 0; i < nodes.length; i++) {
        var dx = nodes[i].x - pt.x;
        var dy = nodes[i].y - pt.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < best) {
          best = d;
          hit = nodes[i];
        }
      }
      return hit;
    }

    canvas.addEventListener("mousemove", function (ev) {
      if (dragging) {
        var pt = screenToWorld(ev.clientX, ev.clientY);
        dragging.x = pt.x;
        dragging.y = pt.y;
        moved = true;
        ticks = Math.min(ticks, 120);
        return;
      }
      if (panning) {
        panX += ev.clientX - panStartX;
        panY += ev.clientY - panStartY;
        panStartX = ev.clientX;
        panStartY = ev.clientY;
        moved = true;
        return;
      }
      var hit = findNode(ev);
      if (hit !== hovered) {
        hovered = hit;
        canvas.style.cursor = hit ? "pointer" : "grab";
      }
    });

    canvas.addEventListener("mouseleave", function () {
      hovered = null;
      dragging = null;
      panning = false;
    });

    canvas.addEventListener("mousedown", function (ev) {
      var hit = findNode(ev);
      moved = false;
      if (hit) {
        dragging = hit;
      } else if (isGlobal) {
        panning = true;
        panStartX = ev.clientX;
        panStartY = ev.clientY;
      }
    });

    if (isGlobal) {
      canvas.addEventListener("wheel", function (ev) {
        ev.preventDefault();
        var factor = ev.deltaY < 0 ? 1.1 : 0.9;
        zoom = Math.max(0.55, Math.min(2.4, zoom * factor));
      }, { passive: false });
    }

    window.addEventListener("mouseup", function () {
      if (dragging && !moved) {
        var clickedId = dragging.id;
        dragging = null;
        if (isGlobal) closeGlobalGraph();
        openNote(clickedId, true);
        return;
      }
      dragging = null;
      panning = false;
    });

    function loop(now) {
      var visible = !document.hidden && (!isGlobal || globalGraphModal.classList.contains("active"));
      if (visible) {
        if (ticks < 160 || dragging) {
          step();
          ticks++;
        }
        draw(now);
      }
      requestAnimationFrame(loop);
    }

    resize();
    requestAnimationFrame(loop);

    return {
      resize: resize,
      draw: function () { draw(performance.now()); },
      setActive: function (id) {
        activeId = id;
        ticks = Math.min(ticks, 130);
        draw(performance.now());
      }
    };
  }

  var localGraph = createGraph(document.getElementById("graph-canvas"), false);
  var globalGraph = createGraph(document.getElementById("global-graph-canvas"), true);

  window.addEventListener("resize", function () {
    localGraph.resize();
    if (globalGraphModal.classList.contains("active")) {
      globalGraph.resize();
    }
  });

  var scrollTicking = false;
  function updateScrollState() {
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docH > 0 ? Math.max(0, Math.min(1, window.scrollY / docH)) : 0;
    if (progressEl) {
      progressEl.style.transform = "scaleX(" + pct.toFixed(4) + ")";
    }
    var headings = bodyEl.querySelectorAll("h2, h3");
    var links = tocListEl.querySelectorAll("a");
    var activeIdx = 0;
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top <= 130) {
        activeIdx = i;
      }
    }
    links.forEach(function (a, idx) {
      a.classList.toggle("in-view", idx === activeIdx);
    });
  }

  window.addEventListener("scroll", function () {
    hidePopover();
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(function () {
        updateScrollState();
        scrollTicking = false;
      });
    }
  }, { passive: true });

  var initialHash = window.location.hash.replace(/^#/, "");
  if (initialHash && NOTES[initialHash]) {
    openNote(initialHash, false);
  } else {
    renderToc();
    renderBacklinks("home");
    setActiveExplorer("home");
    updateScrollState();
    triggerNoteEntrance();
  }
})();
