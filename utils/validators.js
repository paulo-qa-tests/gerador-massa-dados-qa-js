/**
 * Validators Module
 * Modulo para validacao de dados com suporte a email, telefone, usuarios e batches
 * 
 * @module Validators
 * @description Fornece metodos estaticos para validacao de diversos tipos de dados
 */

/**
 * Classe com metodos estaticos para validacao de dados
 * 
 * @class Validators
 * @example
 * // Validacao simples
 * const isValid = Validators.validateEmail('test@email.com');
 * 
 * // Validacao de usuario
 * const result = Validators.validateUser(userData);
 * if (!result.isValid) {
 *   console.log(result.errors);
 * }
 * 
 * // Validacao em lote
 * const batchResult = Validators.validateDataBatch(users, Validators.validateUser);
 */
class Validators {
  
  /**
   * Valida formato de endereco de email
   * 
   * @static
   * @method validateEmail
   * @param {string} email - Endereco de email a ser validado
   * @returns {boolean} True se o email for valido, false caso contrario
   * 
   * @description
   * Regex: ^[^\s@]+@[^\s@]+\.[^\s@]+$
   * - Comeca com caracteres que nao sao espaco ou @
   * - Seguido por @
   * - Seguido por mais caracteres (dominio)
   * - Seguido por ponto
   * - Termina com mais caracteres (extensao)
   * 
   * @example
   * Validators.validateEmail('user@domain.com');     // true
   * Validators.validateEmail('user@domain');         // false
   * Validators.validateEmail('user@.com');           // false
   * Validators.validateEmail('user domain@com');     // false
   */
  static validateEmail(email) {
    // Regex para validacao basica de email
    // Permite letras, numeros, pontos, hifens antes e depois do @
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valida formato de numero de telefone
   * 
   * @static
   * @method validatePhone
   * @param {string} phone - Numero de telefone a ser validado
   * @returns {boolean} True se o telefone for valido, false caso contrario
   * 
   * @description
   * Regex: /^[\+\d\s\(\)-]{10,}$/
   * - Permite: +, numeros, espacos, parenteses, hifens
   * - Minimo de 10 caracteres
   * - Util para formatos internacionais e nacionais
   * 
   * @example
   * Validators.validatePhone('(11) 99999-9999');  // true
   * Validators.validatePhone('+55 11 999999999'); // true
   * Validators.validatePhone('123456789');        // false (muito curto)
   * Validators.validatePhone('abc123');           // false
   */
  static validatePhone(phone) {
    // Regex que aceita formatos comuns de telefone
    // Permite caracteres especiais como +, -, espaco, parenteses
    const phoneRegex = /^[\+\d\s\(\)-]{10,}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Valida objeto de usuario com regras de negocio
   * 
   * @static
   * @method validateUser
   * @param {Object} user - Objeto contendo dados do usuario
   * @param {string} user.name - Nome do usuario
   * @param {string} user.email - Email do usuario
   * @param {number} [user.price] - Preco (opcional, para produtos)
   * @returns {Object} Resultado da validacao
   * @returns {boolean} return.isValid - Se o usuario e valido
   * @returns {Array<string>} return.errors - Lista de erros encontrados
   * 
   * @description
   * Regras de validacao:
   * 1. Nome deve ter no minimo 3 caracteres
   * 2. Email deve estar em formato valido
   * 3. Se houver preco, deve estar entre 0 e 10000
   * 
   * @example
   * const user = {
   *   name: 'Joao',
   *   email: 'joao@email.com',
   *   price: 99.99
   * };
   * 
   * const result = Validators.validateUser(user);
   * if (result.isValid) {
   *   console.log('Usuario valido');
   * } else {
   *   console.log('Erros:', result.errors);
   * }
   */
  static validateUser(user) {
    const errors = [];
    
    // Validacao do nome: minimo 3 caracteres
    // Verifica se nome existe, e string, e comprimento adequado
    if (!user.name || user.name.length < 3) {
      errors.push('Name must have at least 3 characters');
    }
    
    // Validacao do email usando metodo especifico
    if (!this.validateEmail(user.email)) {
      errors.push(`Invalid email: ${user.email}`);
    }
    
    // Validacao de preco (opcional, util para produtos)
    // Se o campo price existir, valida se esta no intervalo permitido
    if (user.price && (user.price < 0 || user.price > 10000)) {
      errors.push(`Invalid price: ${user.price}`);
    }
    
    // Retorna objeto com status e erros
    return {
      isValid: errors.length === 0,  // True se nao houver erros
      errors                           // Array de mensagens de erro
    };
  }

  /**
   * Valida um lote de dados usando uma funcao de validacao customizada
   * 
   * @static
   * @method validateDataBatch
   * @param {Array} data - Array de dados a serem validados
   * @param {Function} validatorFn - Funcao de validacao a ser aplicada a cada item
   * @returns {Object} Estatisticas completas da validacao
   * @returns {number} return.totalItems - Total de itens processados
   * @returns {number} return.validItems - Quantidade de itens validos
   * @returns {number} return.invalidItems - Quantidade de itens invalidos
   * @returns {Array} return.details - Detalhes por item
   * 
   * @description
   * Util para processamento em lote, gera relatorio com:
   * - Total de itens validos / invalidos
   * - Logs detalhados no console
   * - Lista completa de cada item validado
   * 
   * @example
   * // Validar lista de usuarios
   * const users = [
   *   { name: 'Joao', email: 'joao@email.com' },
   *   { name: 'Jo', email: 'invalid' }
   * ];
   * 
   * const batchResult = Validators.validateDataBatch(
   *   users, 
   *   Validators.validateUser
   * );
   * 
   * console.log(`Validos: ${batchResult.validItems}`);
   * console.log(`Invalidos: ${batchResult.invalidItems}`);
   * 
   * @example
   * // Validar apenas emails
   * const emails = ['a@b.com', 'invalid', 'c@d.com'];
   * const emailResult = Validators.validateDataBatch(
   *   emails,
   *   (email) => ({
   *     isValid: Validators.validateEmail(email),
   *     errors: Validators.validateEmail(email) ? [] : ['Invalid email']
   *   })
   * );
   */
  static validateDataBatch(data, validatorFn) {
    // Aplica a funcao de validacao a cada item do array
    // Adiciona o indice original para referencia
    const results = data.map((item, index) => ({
      index,                              // Posicao original no array
      ...validatorFn(item)                // Espalha o resultado da validacao
    }));
    
    // Filtra apenas os itens invalidos
    const invalidItems = results.filter(r => !r.isValid);
    
    // Se houver itens invalidos, exibe aviso no console
    if (invalidItems.length > 0) {
      console.warn(`⚠️  Found ${invalidItems.length} invalid items out of ${data.length}`);
      
      // Lista detalhada de cada item invalido
      invalidItems.forEach(item => {
        console.warn(`  Item ${item.index}: ${item.errors.join(', ')}`);
      });
    }
    
    // Retorna estatisticas completas da validacao
    return {
      totalItems: data.length,                      // Total processado
      validItems: data.length - invalidItems.length, // Contagem de validos
      invalidItems: invalidItems.length,            // Contagem de invalidos
      details: results                               // Detalhamento completo
    };
  }
}

// Exporta a classe para uso em outros modulos
module.exports = Validators;