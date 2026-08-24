import { Page, Layout, Card, Text, BlockStack, Banner } from "@shopify/polaris";

export default function Index() {
  return (
    <Page title="Minval Swatch & Products Group Paneli">
      <BlockStack gap="500">
        <Banner status="success">
          Uygulamanız başarıyla çalışıyor! Mağaza ön yüzü modülü aktif.
        </Banner>
        
        <Layout>
          <Layout.Section>
            <Card padding="500">
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">Products Group (Kardeş Ürün Gruplama)</Text>
                <Text as="p">
                  Aynı modelin farklı renklerini bağlamak için ürün ayarlarındaki 
                  <b> custom.product_group</b> alanına ortak bir grup kodu (Örn: FERACE-101) yazmanız yeterlidir.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card padding="500">
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">Variant Swatch King Modülü</Text>
                <Text as="p">
                  Ürün sayfasındaki renk ve beden seçenekleri otomatik olarak görsel/buton formatına dönüştürülür.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}