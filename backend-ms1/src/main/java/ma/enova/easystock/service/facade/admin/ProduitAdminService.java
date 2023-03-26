package ma.enova.easystock.service.facade.admin;

import java.util.List;
import ma.enova.easystock.bean.core.Produit;
import ma.enova.easystock.dao.criteria.core.ProduitCriteria;
import ma.enova.easystock.dao.criteria.history.ProduitHistoryCriteria;
import ma.enova.easystock.zynerator.service.IService;

public interface ProduitAdminService extends  IService<Produit,ProduitCriteria, ProduitHistoryCriteria>  {




}
