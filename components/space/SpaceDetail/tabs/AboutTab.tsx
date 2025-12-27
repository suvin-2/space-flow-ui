import { TabsContent } from "@/components/ui/tabs"

export function AboutTab() {
  return (
    <TabsContent value="about" className="p-6 space-y-4">
      <div className="space-y-4">
        <p className="text-foreground leading-relaxed">
          Professional photo studio in the heart of Gangnam, perfect for commercial shoots, content
          creation, and creative projects. Features multiple backdrop options, professional lighting
          equipment, and a comfortable preparation area.
        </p>
        <p className="text-foreground leading-relaxed">
          The studio includes natural light from large windows combined with professional studio lighting.
          Ideal for fashion photography, product shoots, and video production. Easy access to public
          transportation and parking available.
        </p>
      </div>
    </TabsContent>
  )
}
