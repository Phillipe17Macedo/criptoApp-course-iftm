import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conteudoFlatlist: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
    paddingTop: 40,
  },
  conatinerCarregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D3D",
  },
  textoCabecalho: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#84B026",
    textAlign: "center",
  },
  criptoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#217373",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  criptoLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  criptoInfo: {
    flex: 1,
  },
  criptoNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  criptoPreco: {
    fontSize: 16,
    color: "#fff",
  },
  criptoVariacao: {
    fontSize: 16,
    color: "#fff",
  },
});
