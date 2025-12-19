import svgPaths from "./svg-0rd4s4g0ou";
import imgImageWithFallback from "figma:asset/dc2c5753c8c2fc6f42d586f118054b929966ddca.png";
import imgImageWithFallback1 from "figma:asset/941a9938929978e272880a572e5e49b2e699536e.png";
import imgImageWithFallback2 from "figma:asset/4a3c587f3721fa8c7a114f6accd92f4fdc8d260b.png";

function Heading1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[48px] left-[384.01px] text-[#f8f9fa] text-[48px] text-center top-[-1.2px] translate-x-[-50%] w-[466px]">Performance Across Deployments</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[384.41px] text-[#adb5bd] text-[20px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Proven results delivering measurable impact
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[140px] items-start left-[151.6px] top-[80px] w-[768px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p26c07280} id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p7137dc0} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30f58000} id="Vector_3" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p14cba870} id="Vector_4" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p231f5b80} id="Vector_5" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2fa55980} id="Vector_6" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.04 24.928L25.5307 23.696" id="Vector_7" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1d0b27c0} id="Vector_8" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ccb8880} id="Vector_9" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2e3bbf00} id="Vector_10" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_11" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(3,255,104,0.1)] left-[76px] rounded-[2.68435e+07px] size-[64px] top-[32.8px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[40px] left-[32.8px] top-[120.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[40px] left-[75.24px] text-[#03ff68] text-[36px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">50K+</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[84px] left-[32.8px] top-[168.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[28px] left-[75.26px] text-[#f8f9fa] text-[18px] text-center top-[0.4px] translate-x-[-50%] w-[81px]">Charging Sessions Managed</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[24px] left-[32.8px] top-[260.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-[75.38px] text-[#6c757d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Per Month
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#212529] h-[317.6px] relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M17.3333 22.6667V12" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M24 22.6667V6.66667" id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1dcdf880} id="Vector_3" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 22.6667V18.6667" id="Vector_4" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(3,255,104,0.1)] left-[76px] rounded-[2.68435e+07px] size-[64px] top-[32.8px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[40px] left-[32.8px] top-[120.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[40px] left-[75.17px] text-[#03ff68] text-[36px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">500+</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[56px] left-[32.8px] top-[168.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[28px] left-[75.2px] text-[#f8f9fa] text-[18px] text-center top-[0.4px] translate-x-[-50%] w-[83px]">Chargers Deployed</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[24px] left-[32.8px] top-[232.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-[75.34px] text-[#6c757d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Across Networks
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_2] bg-[#212529] h-[317.6px] relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pa89ed00} id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p20493380} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(3,255,104,0.1)] left-[76px] rounded-[2.68435e+07px] size-[64px] top-[32.8px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[40px] left-[32.8px] top-[120.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[40px] left-[75.39px] text-[#03ff68] text-[36px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">30%</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56px] left-[32.8px] top-[168.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[28px] left-[75.39px] text-[#f8f9fa] text-[18px] text-center top-[0.4px] translate-x-[-50%] w-[100px]">Faster Turnaround</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[24px] left-[32.8px] top-[232.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-[75.66px] text-[#6c757d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        On Fleet Operations
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_3] bg-[#212529] h-[317.6px] relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M6.66667 29.3333H25.3333" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M6.66667 2.66667H25.3333" id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p93a0c80} id="Vector_3" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.peade0be} id="Vector_4" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(3,255,104,0.1)] left-[76px] rounded-[2.68435e+07px] size-[64px] top-[32.8px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[40px] left-[32.8px] top-[120.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[40px] left-[75.65px] text-[#03ff68] text-[36px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">99.98%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[56px] left-[32.8px] top-[168.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[28px] left-[75.5px] text-[#f8f9fa] text-[18px] text-center top-[0.4px] translate-x-[-50%] w-[98px]">Uptime Maintained</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[24px] left-[32.8px] top-[232.8px] w-[150.4px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-[75.4px] text-[#6c757d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Guaranteed SLA
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_4] bg-[#212529] h-[317.6px] relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[317.6px] left-[55.6px] top-[284px] w-[960px]" data-name="Container">
      <Container5 />
      <Container10 />
      <Container15 />
      <Container20 />
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="absolute bg-[#1a1d21] h-[681.6px] left-0 top-[513.6px] w-[1071.2px]" data-name="CaseStudies">
      <Container />
      <Container21 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[48px] left-[128px] top-0 w-[768px]" data-name="Heading 2">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[48px] left-[384.19px] text-[#f8f9fa] text-[48px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Stories Across Every Segment</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[431.2px]" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[#f8f9fa] text-[30px] text-nowrap top-[-0.6px] whitespace-pre">Metro Fleet Solutions</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Challenge</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] top-[0.6px] w-[420px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Managing 200+ electric delivery vehicles across multiple depots
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-[60px] w-[431.2px]" data-name="Container">
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Solution</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] top-[0.6px] w-[399px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Implemented smart scheduling and load balancing for overnight charging
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-[164px] w-[431.2px]" data-name="Container">
      <Heading5 />
      <Paragraph2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Results</p>
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[224.725px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        35% reduction in energy costs
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container24 />
      <Text />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[177.475px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        100% vehicle availability
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container25 />
      <Text1 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[214.538px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Automated billing integration
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container26 />
      <Text2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[124px] items-start left-0 top-[268px] w-[431.2px]" data-name="Container">
      <Heading6 />
      <List />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[169.82px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-[416px] w-[189.825px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Read Full Case Study</p>
      <Icon4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[440px] left-[496px] top-[32.8px] w-[431.2px]" data-name="Container">
      <Heading2 />
      <Container22 />
      <Container23 />
      <Container27 />
      <Link />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[431.2px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#03ff68] h-[32px] left-[16px] rounded-[2.68435e+07px] top-[16px] w-[168.425px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#0b0d0e] text-[16px] text-nowrap top-[3.6px] whitespace-pre">Fleet Management</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[256px] left-[32.8px] overflow-clip rounded-[12px] top-[124.8px] w-[431.2px]" data-name="Container">
      <ImageWithFallback />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#2c3136] h-[505.6px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container28 />
      <Container30 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[431.2px]" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[#f8f9fa] text-[30px] text-nowrap top-[-0.6px] whitespace-pre">ChargePoint Network</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Challenge</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Scaling from 50 to 300 chargers in 6 months
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-0 top-[60px] w-[431.2px]" data-name="Container">
      <Heading8 />
      <Paragraph3 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Solution</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] top-[0.6px] w-[412px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Cloud-native platform with automated provisioning and monitoring
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-[140px] w-[431.2px]" data-name="Container">
      <Heading9 />
      <Paragraph4 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Results</p>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[229.6px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        6x network growth in 6 months
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container34 />
      <Text3 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[241.65px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Zero downtime during expansion
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container35 />
      <Text4 />
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[218.45px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Real-time utilization analytics
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container36 />
      <Text5 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[124px] items-start left-0 top-[244px] w-[431.2px]" data-name="Container">
      <Heading10 />
      <List1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[169.82px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-0 top-[392px] w-[189.825px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Read Full Case Study</p>
      <Icon5 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[416px] left-[32.8px] top-[32.8px] w-[431.2px]" data-name="Container">
      <Heading7 />
      <Container32 />
      <Container33 />
      <Container37 />
      <Link1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[431.2px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#03ff68] h-[32px] left-[16px] rounded-[2.68435e+07px] top-[16px] w-[144.538px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#0b0d0e] text-[16px] text-nowrap top-[3.6px] whitespace-pre">Public Charging</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[256px] left-[496px] overflow-clip rounded-[12px] top-[112.8px] w-[431.2px]" data-name="Container">
      <ImageWithFallback1 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#2c3136] h-[481.6px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[431.2px]" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[#f8f9fa] text-[30px] text-nowrap top-[-0.6px] whitespace-pre">GreenCity Municipality</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Challenge</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Deploying public charging infrastructure across the city
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-0 top-[60px] w-[431.2px]" data-name="Container">
      <Heading12 />
      <Paragraph5 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Solution</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] top-[0.6px] w-[385px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Multi-tenant platform with citizen app and payment integration
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-[140px] w-[431.2px]" data-name="Container">
      <Heading13 />
      <Paragraph6 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Results</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[217.4px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        150 public chargers deployed
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container44 />
      <Text6 />
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[156.875px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        10K+ registered users
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container45 />
      <Text7 />
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[#03ff68] left-0 rounded-[2.68435e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[184.025px]" data-name="Text">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Dynamic pricing enabled
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container46 />
      <Text8 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[124px] items-start left-0 top-[244px] w-[431.2px]" data-name="Container">
      <Heading14 />
      <List2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[169.82px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-0 top-[392px] w-[189.825px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#03ff68] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Read Full Case Study</p>
      <Icon6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[416px] left-[496px] top-[32.8px] w-[431.2px]" data-name="Container">
      <Heading11 />
      <Container42 />
      <Container43 />
      <Container47 />
      <Link2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[431.2px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#03ff68] h-[32px] left-[16px] rounded-[2.68435e+07px] top-[16px] w-[117.65px]" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#0b0d0e] text-[16px] text-nowrap top-[3.6px] whitespace-pre">Smart Cities</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[256px] left-[32.8px] overflow-clip rounded-[12px] top-[112.8px] w-[431.2px]" data-name="Container">
      <ImageWithFallback2 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#2c3136] h-[481.6px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[1564.8px] items-start left-[32px] top-[112px] w-[960px]" data-name="Container">
      <Container31 />
      <Container41 />
      <Container51 />
    </div>
  );
}

function CaseStudies1() {
  return (
    <div className="absolute h-[1676.8px] left-[23.6px] top-[1275.2px] w-[1024px]" data-name="CaseStudies">
      <Heading4 />
      <Container52 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[48px] left-[384.43px] text-[#f8f9fa] text-[48px] text-center top-[-1.2px] translate-x-[-50%] w-[630px]">Trusted by Innovators in EV Charging</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[384.27px] text-[#adb5bd] text-[20px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Hear from the operators powering the electric future
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[140px] items-start left-[151.6px] top-[80px] w-[768px]" data-name="Container">
      <Heading15 />
      <Paragraph7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6d0980} fill="var(--fill-0, #03FF68)" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon7 key={i} />
      ))}
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#adb5bd] text-[18px] top-[0.4px] w-[381px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`"EV Echos transformed our depot charging operations. The smart scheduling alone saved us 35% on energy costs, and the platform just works."`}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20.712px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[20.712px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">DR</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#03ff68] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.013px] py-0 relative size-[48px]">
        <Text9 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">David Rodriguez</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#6c757d] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Fleet Manager, Metro Fleet Solutions
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[48px] relative shrink-0 w-[267.538px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[267.538px]">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[72.8px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <Container55 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#212529] box-border content-stretch flex flex-col gap-[24px] h-[318.4px] items-start left-0 pb-[0.8px] pt-[32.8px] px-[32.8px] rounded-[12px] top-0 w-[464px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container54 />
      <Paragraph8 />
      <Container59 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6d0980} fill="var(--fill-0, #03FF68)" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon8 key={i} />
      ))}
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#adb5bd] text-[18px] top-[0.4px] w-[386px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`"We scaled from 50 to 300 chargers without a single hiccup. The platform's reliability and support team are exceptional."`}</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.65px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[23.65px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">SM</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#03ff68] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text10 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Sarah Mitchell</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#6c757d] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        COO, ChargePoint Network
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[48px] relative shrink-0 w-[198.825px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[198.825px]">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[72.8px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <Container62 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#212529] box-border content-stretch flex flex-col gap-[24px] h-[318.4px] items-start left-[496px] pb-[0.8px] pt-[32.8px] px-[32.8px] rounded-[12px] top-0 w-[464px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container61 />
      <Paragraph9 />
      <Container66 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6d0980} fill="var(--fill-0, #03FF68)" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon9 key={i} />
      ))}
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#adb5bd] text-[18px] top-[0.4px] w-[391px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`"The multi-tenant capabilities allowed us to launch our citywide EV program in record time. Citizens love the app."`}</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[19.125px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#03ff68] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text11 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">James Park</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#6c757d] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Director of Sustainability
      </p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[48px] relative shrink-0 w-[182.475px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[182.475px]">
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[72.8px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <Container69 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#212529] box-border content-stretch flex flex-col gap-[24px] h-[290.4px] items-start left-0 pb-[0.8px] pt-[32.8px] px-[32.8px] rounded-[12px] top-[350.4px] w-[464px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container68 />
      <Paragraph10 />
      <Container73 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6d0980} fill="var(--fill-0, #03FF68)" id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon10 key={i} />
      ))}
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#adb5bd] text-[18px] top-[0.4px] w-[379px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`"Real-time analytics and load balancing features are game-changers. We're managing our entire network more efficiently than ever."`}</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.825px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.825px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">LA</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#03ff68] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text12 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Lisa Anderson</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#6c757d] text-[16px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        VP Operations, PowerGrid Solutions
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[48px] relative shrink-0 w-[263.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[263.3px]">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[72.8px] items-center pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <Container76 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute bg-[#212529] box-border content-stretch flex flex-col gap-[24px] h-[290.4px] items-start left-[496px] pb-[0.8px] pt-[32.8px] px-[32.8px] rounded-[12px] top-[350.4px] w-[464px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container75 />
      <Paragraph11 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[640.8px] left-[55.6px] top-[284px] w-[960px]" data-name="Container">
      <Container60 />
      <Container67 />
      <Container74 />
      <Container81 />
    </div>
  );
}

function CaseStudies2() {
  return (
    <div className="absolute bg-[#1a1d21] h-[1004.8px] left-0 top-[3032px] w-[1071.2px]" data-name="CaseStudies">
      <Container53 />
      <Container82 />
    </div>
  );
}

function Container83() {
  return <div className="absolute bg-[#03ff68] blur-3xl filter left-[510.4px] rounded-[2.68435e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container84() {
  return <div className="absolute bg-[#03ff68] blur-3xl filter left-0 rounded-[2.68435e+07px] size-[384px] top-[-68px]" data-name="Container" />;
}

function Container85() {
  return (
    <div className="absolute h-[316px] left-[0.8px] opacity-10 top-[0.8px] w-[894.4px]" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[766.4px]" data-name="Heading 2">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[40px] left-[383.23px] text-[#f8f9fa] text-[36px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">Ready to Write Your Success Story?</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[28px] left-[47.2px] top-[72px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[336.49px] text-[#adb5bd] text-[20px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Join the operators who trust EV Echos to power their charging networks
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[180.88px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0B0D0E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0B0D0E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#03ff68] h-[56px] left-[266.76px] rounded-[8px] top-[132px] w-[232.875px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-[102.5px] text-[#0b0d0e] text-[16px] text-center text-nowrap top-[15.6px] translate-x-[-50%] whitespace-pre">Get Started Today</p>
      <Icon11 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[188px] left-[64.8px] top-[64.8px] w-[766.4px]" data-name="Container">
      <Heading16 />
      <Paragraph12 />
      <Link3 />
    </div>
  );
}

function CaseStudies3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#2c3136] h-[317.6px] left-[87.6px] rounded-[16px] to-[#212529] top-[4116.8px] w-[896px]" data-name="CaseStudies">
      <div className="h-[317.6px] overflow-clip relative rounded-[inherit] w-[896px]">
        <Container85 />
        <Container86 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container87() {
  return <div className="absolute h-[513.6px] left-0 top-0 w-[1071.2px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[97.25px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#03ff68] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Case Studies
      </p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[rgba(3,255,104,0.1)] h-[41.6px] left-[382.57px] rounded-[2.68435e+07px] top-0 w-[130.85px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(3,255,104,0.3)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[92px] items-start left-[206.35px] top-[61.6px] w-[483.3px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[72px] relative shrink-0 text-[#03ff68] text-[72px] text-center text-nowrap tracking-[-1.8px] whitespace-pre">Real Operators</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[144px] left-0 top-[73.6px] w-[896px]" data-name="Heading 1">
      <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[72px] left-[448.31px] text-[#f8f9fa] text-[72px] text-center text-nowrap top-[-0.4px] tracking-[-1.8px] translate-x-[-50%] whitespace-pre">Real Results from</p>
      <Text14 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[56px] left-[112px] top-[249.6px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[336.4px] text-[#adb5bd] text-[20px] text-center top-[-0.2px] translate-x-[-50%] w-[670px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        See how leading operators are transforming their charging networks with EV Echos
      </p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[305.6px] left-[87.6px] top-[128px] w-[896px]" data-name="Container">
      <Container88 />
      <Heading />
      <Paragraph13 />
    </div>
  );
}

function CaseStudies4() {
  return (
    <div className="absolute h-[513.6px] left-0 overflow-clip top-0 w-[1071.2px]" data-name="CaseStudies">
      <Container87 />
      <Container89 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[4514.4px] relative shrink-0 w-full" data-name="Main Content">
      <CaseStudies />
      <CaseStudies1 />
      <CaseStudies2 />
      <CaseStudies3 />
      <CaseStudies4 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.913px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.913px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">EV</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#03ff68] relative rounded-[8px] shrink-0 size-[32px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.013px] py-0 relative size-[32px]">
        <Text15 />
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.525px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.525px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f8f9fa] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">EV Echos</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Link">
      <Footer />
      <Footer1 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#adb5bd] text-[16px] top-[0.6px] w-[282px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Leading the electric vehicle revolution with innovative, sustainable, and high-performance vehicles for a better tomorrow.
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c358280} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#2c3136] relative rounded-[8px] shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.8px] relative size-[40px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pba1780} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#2c3136] relative rounded-[8px] shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.8px] relative size-[40px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_17_587)" id="Icon">
          <path d={svgPaths.p299a6200} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3cad6d80} id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.125 4.875H13.1325" id="Vector_3" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_17_587">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#2c3136] relative rounded-[8px] shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.8px] relative size-[40px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p204bd7c0} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pad25e80} id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p127a4d00} id="Vector_3" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#2c3136] relative rounded-[8px] shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.8px] relative size-[40px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1e200900} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p35138200} id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#2c3136] relative rounded-[8px] shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.8px] relative size-[40px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-0 top-0 w-[298.663px]" data-name="Container">
      <Link4 />
      <Paragraph14 />
      <Container90 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[27px] left-0 text-[#f8f9fa] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">Company</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[68.362px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        About Us
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[97.25px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Case Studies
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[60.275px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Contact
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[29.825px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        FAQ
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-[330.66px] top-0 w-[133.338px]" data-name="Container">
      <Heading17 />
      <List3 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[27px] left-0 text-[#f8f9fa] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">Platform</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[63.925px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Features
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[68.275px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Solutions
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[84.138px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Technology
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[50.038px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Pricing
      </p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link17 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-[496px] top-0 w-[133.325px]" data-name="Container">
      <Heading18 />
      <List4 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[27px] left-0 text-[#f8f9fa] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[114.838px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Documentation
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[102.263px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        API Reference
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[115.162px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Support Center
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link20 />
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[106.513px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        System Status
      </p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link21 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-[661.33px] top-0 w-[133.338px]" data-name="Container">
      <Heading19 />
      <List5 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[27px] left-0 text-[#f8f9fa] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">Legal</p>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[101.738px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Privacy Policy
      </p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link22 />
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[122.963px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Terms of Service
      </p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link23 />
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[61.538px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Security
      </p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link24 />
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-0 top-[1.6px] w-[88.775px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#adb5bd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Compliance
      </p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link25 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-[826.66px] top-0 w-[133.338px]" data-name="Container">
      <Heading20 />
      <List6 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Link26() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[134.725px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[134.725px]">
        <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap tracking-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>{`TERMS & CONDITIONS`}</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[98.537px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[98.537px]">
        <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap tracking-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          PRIVACY POLICY
        </p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[960px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-center justify-between relative w-[960px]">
        <Link26 />
        <Link27 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[960px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[960px]">
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-[480.35px] text-[#6c757d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          ©2025 COPYRIGHT BY EV ECHOS
        </p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[84.787px] items-start pb-0 pt-[32.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <Container97 />
      <Paragraph15 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[340.788px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[340.788px] items-start px-[32px] py-0 relative w-full">
          <Container96 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-[#212529] h-[437.587px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[437.587px] items-start pb-0 pt-[64.8px] px-[23.6px] relative w-full">
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#212529] box-border content-stretch flex flex-col h-[4951.99px] items-start left-0 pl-[80px] pr-0 py-0 top-0 w-[1151.2px]" data-name="App">
      <MainContent />
      <Footer2 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.913px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.913px]">
        <p className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#0b0d0e] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">EV</p>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <div className="bg-[#03ff68] relative rounded-[12px] shrink-0 size-[40px]" data-name="SideNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-[40px]">
        <Text16 />
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[80px] top-0" data-name="Link">
      <SideNav />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p9bbea0} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.pfe0e100} id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function SideNav1() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 rounded-[12px] top-0 w-[30.4px]" data-name="SideNav">
      <Icon17 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[43.737px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f8f9fa] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Home
      </p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[8px] left-[-3.2px] top-[16.8px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav2() {
  return (
    <div className="absolute bg-[rgba(33,37,41,0.9)] h-[41.6px] left-[38.4px] opacity-0 rounded-[8px] top-[3.2px] w-[77.338px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text17 />
      <Container100 />
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[30.4px]" data-name="Link">
      <SideNav1 />
      <SideNav2 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p3dadee40} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function SideNav3() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 rounded-[12px] top-0 w-[30.4px]" data-name="SideNav">
      <Icon18 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[63.925px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f8f9fa] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Features
      </p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[8px] left-[-3.2px] top-[16.8px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav4() {
  return (
    <div className="absolute bg-[rgba(33,37,41,0.9)] h-[41.6px] left-[38.4px] opacity-0 rounded-[8px] top-[3.2px] w-[97.525px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text18 />
      <Container101 />
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute h-[48px] left-0 top-[56px] w-[30.4px]" data-name="Link">
      <SideNav3 />
      <SideNav4 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_17_578)" id="Icon">
          <path d={svgPaths.p3b74e100} id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p822c380} id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p36a3b900} id="Vector_3" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
        <defs>
          <clipPath id="clip0_17_578">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SideNav5() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 rounded-[12px] top-0 w-[30.4px]" data-name="SideNav">
      <Icon19 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[68.275px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f8f9fa] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Solutions
      </p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[8px] left-[-3.2px] top-[16.8px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav6() {
  return (
    <div className="absolute bg-[rgba(33,37,41,0.9)] h-[41.6px] left-[38.4px] opacity-0 rounded-[8px] top-[3.2px] w-[101.875px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text19 />
      <Container102 />
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[48px] left-0 top-[112px] w-[30.4px]" data-name="Link">
      <SideNav5 />
      <SideNav6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_17_562)" id="Icon">
          <path d="M11 18.3333V20.1667" id="Vector" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M11 1.83333V3.66667" id="Vector_2" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M15.5833 18.3333V20.1667" id="Vector_3" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M15.5833 1.83333V3.66667" id="Vector_4" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M1.83333 11H3.66667" id="Vector_5" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M1.83333 15.5833H3.66667" id="Vector_6" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M1.83333 6.41667H3.66667" id="Vector_7" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M18.3333 11H20.1667" id="Vector_8" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M18.3333 15.5833H20.1667" id="Vector_9" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M18.3333 6.41667H20.1667" id="Vector_10" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M6.41667 18.3333V20.1667" id="Vector_11" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M6.41667 1.83333V3.66667" id="Vector_12" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p17d84d80} id="Vector_13" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p284af680} id="Vector_14" stroke="var(--stroke-0, #ADB5BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
        <defs>
          <clipPath id="clip0_17_562">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SideNav7() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 rounded-[12px] top-0 w-[30.4px]" data-name="SideNav">
      <Icon20 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[84.138px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f8f9fa] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Technology
      </p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[8px] left-[-3.2px] top-[16.8px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav8() {
  return (
    <div className="absolute bg-[rgba(33,37,41,0.9)] h-[41.6px] left-[38.4px] opacity-0 rounded-[8px] top-[3.2px] w-[117.738px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text20 />
      <Container103 />
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute h-[48px] left-0 top-[168px] w-[30.4px]" data-name="Link">
      <SideNav7 />
      <SideNav8 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p31ccd400} id="Vector" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.pf3da880} id="Vector_2" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M9.16667 8.25H7.33333" id="Vector_3" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M14.6667 11.9167H7.33333" id="Vector_4" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M14.6667 15.5833H7.33333" id="Vector_5" stroke="var(--stroke-0, #03FF68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function SideNav9() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 rounded-[12px] top-0 w-[30.4px]" data-name="SideNav">
      <Icon21 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16.8px] top-[10.4px] w-[97.25px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#03ff68] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Case Studies
      </p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[8px] left-[-3.2px] top-[16.8px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav10() {
  return (
    <div className="absolute bg-[rgba(33,37,41,0.9)] h-[41.6px] left-[38.4px] opacity-0 rounded-[8px] top-[3.2px] w-[130.85px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text21 />
      <Container104 />
    </div>
  );
}

function Link33() {
  return (
    <div className="absolute h-[48px] left-0 top-[224px] w-[30.4px]" data-name="Link">
      <SideNav9 />
      <SideNav10 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[272px] relative shrink-0 w-full" data-name="Container">
      <Link29 />
      <Link30 />
      <Link31 />
      <Link32 />
      <Link33 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[rgba(248,249,250,0.05)] box-border content-stretch flex flex-col h-[289.6px] items-start left-[16px] pb-[0.8px] pt-[8.8px] px-[8.8px] rounded-[24px] top-[244px] w-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(173,181,189,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container105 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[13px] size-[22px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p7e68480} id="Vector" stroke="var(--stroke-0, #0B0D0E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p242cba00} id="Vector_2" stroke="var(--stroke-0, #0B0D0E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[20.8px] items-start left-[16px] top-[9.6px] w-[90.388px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0b0d0e] text-[16px] text-nowrap whitespace-pre">Get Started</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[8px] left-[-4px] top-[16px] w-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_4px_4px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SideNav11() {
  return (
    <div className="absolute bg-[#03ff68] h-[40px] left-[56px] opacity-0 rounded-[8px] top-[4px] w-[122.388px]" data-name="SideNav">
      <Text22 />
      <Container107 />
    </div>
  );
}

function SideNav12() {
  return <div className="absolute bg-[#03ff68] blur-xl filter left-0 opacity-0 size-[48px] top-0" data-name="SideNav" />;
}

function Link34() {
  return (
    <div className="absolute bg-[#03ff68] left-[16px] overflow-clip rounded-[12px] size-[48px] top-[697.6px]" data-name="Link">
      <Icon22 />
      <SideNav11 />
      <SideNav12 />
    </div>
  );
}

function SideNav13() {
  return (
    <div className="absolute bg-[#212529] h-[777.6px] left-0 top-0 w-[80px]" data-name="SideNav">
      <Link28 />
      <Container106 />
      <Link34 />
    </div>
  );
}

export default function BuildEvEchosWebsite() {
  return (
    <div className="bg-[#212529] relative size-full" data-name="Build EV Echos Website">
      <App />
      <SideNav13 />
    </div>
  );
}