// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 130,
  slug: "faq-engenheiro-estruturas-concreto",
  category: "Normas Técnicas",
  title: "FAQ Técnico: 30 Perguntas Frequentes de Engenheiros sobre Estruturas de Concreto",
  metaDescription: "30 perguntas técnicas frequentes de engenheiros respondidas: NBR 6118, cobrimento, ancoragem, emendas, fck, lajes, pilares, estacas e patologias.",
  keyword: "perguntas frequentes engenheiros estruturas concreto",
  date: "21 Mai 2026",
  summary: "30 perguntas técnicas frequentes de engenheiros com respostas diretas: NBR 6118, armação, concreto, lajes, fundações e patologias.",
  content: `## Sobre Normas e Fundamentos

**1. Qual a diferença entre fck e fcj?**
fck é a resistência característica à compressão do concreto determinada a 28 dias de cura. fcj é a resistência na idade j dias — pode ser qualquer idade. Para liberação de fôrma ou aplicação de protensão, usa-se fcj.

**2. O que é classe de agressividade ambiental (CAA)?**
Classificação da NBR 6118 (tabela 6.1) que define o nível de agressividade do ambiente onde a estrutura está inserida: Classe I (fraca), II (moderada), III (forte), IV (muito forte). Determina o cobrimento mínimo e o fck mínimo.

**3. Qual o fck mínimo para ambiente urbano?**
Classe II (urbano): fck mínimo = 25 MPa. Relação água/cimento máxima = 0,60.

**4. Qual a diferença entre cobrimento nominal e cobrimento mínimo?**
Cobrimento mínimo (c_min) é o valor definido pela classe de agressividade. Cobrimento nominal (c_nom) = c_min + 10 mm (tolerância de execução). O projeto deve especificar c_nom; em obra, o mínimo aceitável é c_min.

**5. A NBR 6118:2014 ainda é a versão vigente?**
Sim, com algumas emendas. Uma revisão (NBR 6118:2023 ou 2024) está em elaboração, mas a versão 2014 (com erratas) segue como referência normativa vigente até nova publicação formal.

---

## Sobre Armação e Detalhamento

**6. Qual o comprimento mínimo de ancoragem para CA-50 em C25?**
Para barra reta em posição boa de concretagem: lb = 54 × φ. Para barra com gancho de 90°: lb,ef = 33 × φ.

Exemplo: φ 12,5 mm → barra reta: 54 × 12,5 = 675 mm ≈ 68 cm.

**7. Posso emendar todas as barras na mesma seção?**
Não. A NBR 6118 proíbe emendar mais de 50% das barras em uma mesma seção (definida como zona de comprimento 1,3 × lt). Recomenda-se escalonar as emendas para minimizar a concentração de esforços.

**8. Qual o diâmetro mínimo de estribo em vigas?**
5 mm (CA-60) ou 6,3 mm (CA-50). Na prática, φ 5 e φ 6,3 mm são os mais usados em vigas convencionais.

**9. Posso usar CA-60 como armadura principal em vigas?**
Sim, tecnicamente. Mas CA-60 é disponível em diâmetros pequenos (até 10 mm) e tem menor ductilidade que CA-50. Para armaduras principais de vigas (que precisam de ductilidade), CA-50 é mais indicado.

**10. Qual a armadura de distribuição mínima em lajes?**
20% da armadura principal, com taxa mínima de 0,9 cm²/m. Espaçamento máximo: 3 × h ou 33 cm (o menor).

**11. Qual o cobrimento para ferragem em contato com o solo?**
Mínimo 45 mm (equivalente à Classe III). Se o solo for agressivo (presença de sulfatos, cloretos), usar 65 mm (Classe IV).

**12. Qual a diferença entre armadura de montagem e armadura construtiva?**
Armadura de montagem garante a geometria da gaiola durante a concretagem (diâmetro mínimo: 10 mm em vigas). Armadura construtiva (ou de distribuição) controla fissuração por retração — geralmente nas faces perpendiculares à armadura principal.

---

## Sobre Lajes

**13. Qual a espessura mínima de uma laje maciça?**
Segundo NBR 6118, item 13.2.3: h ≥ L/35 (lajes com uma direção predominante) ou h ≥ L/40 (lajes em duas direções); mínimo absoluto de 7 cm para lajes não transitáveis ou 8 cm para lajes com tráfego leve.

**14. Posso usar laje com 7 cm de espessura para piso de casa?**
Não é recomendado. Para piso residencial: mínimo de 8 a 10 cm. Lajes de 7 cm são indicadas apenas para lajes de cobertura não transitáveis.

**15. Qual a diferença entre laje nervurada e laje treliçada?**
Laje treliçada usa vigotas pré-moldadas com treliças incorporadas. Laje nervurada tem nervos moldados in loco (ou com fôrma removível), sem vigotas. Ambas são subcategorias de laje nervurada conforme a NBR 6118.

**16. Quanto de aço precisa por m² de laje?**
Varia com o vão e a carga. Orientativo para lajes residenciais:
- Laje treliçada (vão 4–5 m): 8 a 12 kg/m²
- Laje maciça (vão 4–5 m): 10 a 18 kg/m²
- Laje nervurada (vão 6–8 m): 12 a 20 kg/m²

---

## Sobre Pilares e Vigas

**17. Qual a dimensão mínima de um pilar?**
NBR 6118, item 13.2.3: menor dimensão da seção transversal ≥ 19 cm. Para pilares de seção circular: diâmetro ≥ 19 cm.

**18. Qual a taxa de armadura mínima em pilares?**
ρs,min = 0,4% da área bruta do pilar. Taxa máxima: 4% (fora de emendas) ou 8% (em emendas).

**19. O pilar tem armadura nos quatro cantos, mas também precisa de barras intermediárias?**
Sim. O espaçamento máximo entre barras consecutivas do pilar na face é 20 cm (NBR 6118, item 18.4.2.2). Barras intermediárias são necessárias quando os cantos ficam a mais de 20 cm de distância.

**20. Quando é necessário usar viga de baldrame?**
Sempre que as fundações forem isoladas (sapatas ou blocos), a viga de baldrame interliga os pilares no nível do piso, distribui e equaliza os recalques diferenciais, e serve de apoio para as paredes do embasamento.

---

## Sobre Fundações

**21. Qual a diferença entre sapata isolada e sapata corrida?**
Sapata isolada recebe a carga de um único pilar. Sapata corrida recebe a carga de uma parede ou de vários pilares alinhados — funciona como viga de fundação.

**22. Quando usar fundação profunda (estacas) ao invés de fundação rasa (sapatas)?**
Quando a capacidade de suporte do solo superficial é insuficiente para suportar as cargas da estrutura. A sondagem SPT indica a necessidade: solos com NSPT < 5 nos primeiros 2–3 metros geralmente exigem fundação profunda.

**23. O que é o índice NSPT?**
Número de golpes necessários para cravar 30 cm o amostrador padrão na sondagem SPT. NSPT < 5 = solo mole; NSPT 5 a 10 = solo médio; NSPT > 20 = solo firme a muito resistente.

---

## Sobre Concreto

**24. Qual a diferença entre C25 e C30?**
fck: C25 = 25 MPa; C30 = 30 MPa. Em prática: C30 tem maior resistência, menor permeabilidade, maior custo (~10-15% mais caro). Use C30 para ambientes agressivos (Classe III) ou cargas elevadas.

**25. O que é slump e qual o valor ideal para lajes?**
Slump (abatimento) mede a consistência do concreto fresco. Para lajes bombeadas: 14 a 18 cm. Para pilares e vigas com forma adensável: 10 a 16 cm. Slump alto facilita o lançamento mas pode reduzir a resistência se não controlado.

**26. Por quanto tempo curar o concreto?**
NBR 14931: cura úmida mínima de 3 dias para cimentos CP-V; 7 dias para CP-II, CP-III, CP-IV; mais tempo para ambientes agressivos. A cura inadequada pode reduzir a resistência em até 30%.

---

## Sobre Patologias

**27. O que causa fissuras diagonais a 45° em vigas?**
Esforço cortante excessivo — cisalhamento. Indica insuficiência de estribos ou concreto de baixa resistência. É um sinal crítico que requer avaliação estrutural urgente.

**28. Manchas brancas na superfície do concreto são perigosas?**
Dependem da causa. Eflorescência (sais brancos na superfície por migração de cálcio) é estética e indica umidade, mas não compromete estruturalmente. Lixiviação (perda de cálcio do concreto por lavagem contínua) é mais séria — fragiliza o material.

**29. Como saber se a ferragem está enferrujando?**
Sinais: manchas de ferrugem no concreto, fissuras longitudinais paralelas à armadura, desplacamento do cobrimento (lascamento). Em fase inicial, pode ser detectada por termografia ou mapeamento de potencial de corrosão.

**30. O que fazer quando encontrar barra de aço exposta em uma estrutura existente?**
1. Avaliar a extensão da corrosão (martelo de borracha — concreto delamina soa oco)
2. Remover todo o concreto comprometido (demolição cirúrgica até 2 cm após a ferragem)
3. Tratar a ferragem com convertedor de ferrugem ou jato de areia
4. Reconstituir o cobrimento com argamassa de reparo polimérica
5. Avaliar necessidade de reforço estrutural se a seção da barra estiver reduzida`,
};

export default post;
